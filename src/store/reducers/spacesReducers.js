import { SPACES_FETCHED, SPACE_SAVED } from "../actions";

const spacesReducer = (state = [], action) => {
	const { spaces, space, type } = action;

	switch (type) {
		case SPACES_FETCHED:
			state = spaces;
			break;
		case SPACE_SAVED:
			state = [...state, space];
			break;
		default:
		// not a thing
	}

	return state;
};

export default spacesReducer;
