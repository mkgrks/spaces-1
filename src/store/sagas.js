import { call, put, select, takeEvery } from "redux-saga/effects";
import { getLocal, setLocal, deleteLocal } from "../utils/functions";
import * as api from "../api/spaces";

import {
	FETCH_SPACES,
	SPACES_FETCHED,
	USER_LOGOUT,
	USER_LOGIN,
	USER_FETCHED,
	ERROR,
	SCRAPED,
	SCRAPE,
	CREATE_SPACE,
	SPACE_SAVED,
} from "./actions";

function* initialize() {
	const user = getLocal("user");

	if (user) {
		yield put({ type: USER_FETCHED, user });

		try {
			// maybe not a valid session.
			const spaces = yield call(api.fetchUserSpaces);

			if (spaces.error) throw spaces.error;
			yield put({ type: SPACES_FETCHED, spaces });

			return;
		} catch (e) {
			yield put({ type: USER_LOGOUT });
			deleteLocal("user");
		}
	}

	const init = yield call(api.handshake);

	if (init.user) {
		// with handshake, if already in session and not in local storage, set again!
		setLocal("user", init.user);
		yield put({ type: USER_FETCHED, user: init.user });
		yield put({ type: SPACES_FETCHED, spaces: init.spaces });
	} else {
		yield put({ type: SPACES_FETCHED, spaces: init.spaces });
	}
}

function* createSpace(action) {
	const { name, description, isPublic } = action;
	const response = yield call(api.createSpace, name, description, isPublic);

	const space = {
		id: response.id,
		size: response.size,
		color: "#fff",
		name,
		descr: description,
		public: isPublic,
		// owner?
	};

	yield put({ type: SPACE_SAVED, space });
}

function* fetchSpaces() {
	// const state = yield select();
	const spaces = yield call(api.fetchUserSpaces);
	yield put({ type: SPACES_FETCHED, spaces });
}

function* userLogin(action) {
	const response = yield call(api.auth, action.authCode);

	if (response.user) {
		if (response.user.returning) {
			yield put({ type: USER_FETCHED, user: response.user });
			localStorage.setItem("user", JSON.stringify(response.user));
			yield put({ type: FETCH_SPACES });
		} else {
			// yield put({ type: NEW_USER, user: response.user })
		}
	}

	// yield put({ type: ERROR, error: response.error });
}

function* userLogout() {
	const response = yield call(api.logout);

	if (response.error) {
		yield put({ type: ERROR, error: response.error });
	} else {
		deleteLocal("user");
	}
}

function* scrape(action) {
	const scraped = yield call(api.scrape, action.url);

	if (scraped.warning || scraped.error) {
		// maybe errors should be just for me, while warning be displayed, later
		yield put({ type: ERROR, error: scraped.error || scraped.warning });
	}

	yield put({ type: SCRAPED, scrapedData: scraped.data });
}

function* rootSaga() {
	yield initialize();
	yield takeEvery(FETCH_SPACES, fetchSpaces);
	yield takeEvery(USER_LOGIN, userLogin);
	yield takeEvery(USER_LOGOUT, userLogout);
	yield takeEvery(SCRAPE, scrape);
	yield takeEvery(CREATE_SPACE, createSpace);
}

export default rootSaga;
