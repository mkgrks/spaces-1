import { LOADING, DISMISS_NOTIFICATION, ERROR } from ".";

export const loader = status => {
	return {
		type: LOADING,
		loading: status,
	};
};

export const dismissNotification = () => {
	return {
		type: DISMISS_NOTIFICATION,
	};
};

export const error = status => {
	return {
		type: ERROR,
		error: status,
	};
};
