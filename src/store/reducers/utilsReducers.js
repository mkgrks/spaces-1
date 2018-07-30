import { ERROR, USER_FETCHED, LOADING, USER_LOGIN, DISMISS_NOTIFICATION } from "../actions";
import { errorMessages } from "../../utils/defaults";

export const loadingReducer = (state = false, action) => {
	const { loading, type } = action;
	// debugger; // eslint-disable-line
	switch (type) {
		case USER_FETCHED:
		case ERROR:
			state = false;
			break;
		case LOADING:
			state = loading;
			break;
		case USER_LOGIN:
			state = true;
			break;

		default:
		// not a thing
	}

	return state;
};

export const errorReducer = (state = "", action) => {
	const { error, type } = action;

	switch (type) {
		case ERROR:
			state = errorMessages(error);
			break;

		default:
		// not a thing
	}

	return state;
};

export const notificationReducers = (state = { text: "", timer: 0 }, action) => {
	const { error, user, type } = action;

	switch (type) {
		case USER_FETCHED:
			state = {
				text: `Welcome ${user.firstName}!`,
				timer: 3000, // later
			};
			break;

		case DISMISS_NOTIFICATION:
			state = {
				text: "",
				timer: 0,
			};
			break;

		case ERROR:
			state = {
				text: errorMessages(error),
				timer: 3000,
			};
			break;

		default:
		// not a thing
	}

	return state;
};
