import { FETCHED_SPACES, INITIALIZATION } from "../actions";

const spacesReducer = (state = false, action) => {
	const { spaces, type } = action;

	switch (type) {
		case FETCHED_SPACES:
		case INITIALIZATION:
			state = spaces;
			break;

		default:
		// not a thing
	}

	return state;
};

export default spacesReducer;
