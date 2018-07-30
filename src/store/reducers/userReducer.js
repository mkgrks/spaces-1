import { USER_FETCHED, USER_LOGOUT, NEW_USER } from "../actions";

const userReducer = (state = {}, action) => {
	const { user, type } = action;

	switch (type) {
		case USER_FETCHED:
		case NEW_USER:
			state = {
				avatar: user.avatar,
				fullName: user.fullName,
				firstName: user.firstName,
				email: user.email,
				returning: user.returning,
			};
			break;

		default:
		// not a thing
	}

	return state;
};

export default userReducer;
