import { USER_LOGOUT, USER_LOGIN } from ".";

export const userLogin = authCode => {
	return {
		type: USER_LOGIN,
		authCode,
	};
};

export const userLogout = () => {
	return {
		type: USER_LOGOUT,
	};
};
