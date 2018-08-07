import { USER_LOGOUT, USER_LOGIN, CREATE_SPACE } from ".";

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

export const createSpace = (name, description, isPublic) => {
	return {
		type: CREATE_SPACE,
		name,
		description,
		isPublic,
	};
};
