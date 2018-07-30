import { userLogin, userLogout } from "./userActions";
import { loader, dismissNotification, error } from "./utilsActions";

export const USER_FETCHED = "USER_FETCHED";
export const USER_LOGIN = "USER_LOGIN";
export const NEW_USER = "NEW_USER";
export const USER_LOGOUT = "USER_LOGOUT";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const FETCH_SPACES = "FETCH_SPACES";
export const INITIALIZATION = "INITIALIZATION";
export const FETCHED_SPACES = "FETCHED_SPACES";
export const DISMISS_NOTIFICATION = "DISMISS_NOTIFICATION";

export { loader, userLogout, userLogin, dismissNotification, error };
