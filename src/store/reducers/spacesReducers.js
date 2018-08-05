import { SPACES_FETCHED } from "../actions";

const spacesReducer = (state = [], action) => {
	const { spaces, type } = action;
	// debugger; // eslint-disable-line

	switch (type) {
		case SPACES_FETCHED:
			state = spaces;
			break;

		default:
		// not a thing
	}

	return state;
};

export default spacesReducer;
