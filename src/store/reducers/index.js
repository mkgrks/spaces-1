import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import * as actions from "../actions";
import userReducer from "./userReducer";
import spacesReducers from "./spacesReducers";
import {
	loadingReducer,
	errorReducer,
	notificationReducers,
	scrapedReducer,
} from "./utilsReducers";

const appReducer = combineReducers({
	router: routerReducer,
	user: userReducer,
	loading: loadingReducer,
	error: errorReducer,
	spaces: spacesReducers,
	notification: notificationReducers,
	scrapedData: scrapedReducer,
});

const reducers = (state, action) => {
	action.type === actions.USER_LOGOUT && (state = undefined);
	return appReducer(state, action);
};

export default reducers;
