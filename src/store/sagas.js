import { call, put, select, takeEvery } from "redux-saga/effects";
import * as api from "../api/spaces";
import { fetchThumbnails } from "../api/unsplash";
import {
	FETCH_SPACES,
	FETCHED_SPACES,
	USER_LOGIN,
	USER_FETCHED,
	ERROR,
	INITIALIZATION,
} from "./actions";

function* initialize() {
	const images = yield call(fetchThumbnails, 10);
	const spaces = images.map(i => {
		return {
			id: i.id,
			descr: i.description,
			name: i.location ? i.location.title : "Title Here!",
			thumbnail: i.urls.thumb,
		};
	});
	yield put({ type: INITIALIZATION, spaces });
}

function* fetchSpaces(action) {
	// const state = yield select();
	const spaces = yield call(api.fetchUserSpaces, action.owner);
	yield put({ type: FETCHED_SPACES, spaces });
}

function* userLogin(action) {
	const response = yield call(api.auth, action.authCode);

	if (response.user) {
		if (response.user.returning) {
			yield put({ type: USER_FETCHED, user: response.user });
			yield put({ type: FETCH_SPACES, owner: response.user.id });
		} else {
			// yield put({ type: NEW_USER, user: response.user })
		}
	}

	// yield put({ type: ERROR, error: response.error });
}

function* rootSaga() {
	yield initialize();
	yield takeEvery(FETCH_SPACES, fetchSpaces);
	yield takeEvery(USER_LOGIN, userLogin);
}

export default rootSaga;
