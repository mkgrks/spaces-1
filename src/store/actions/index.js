import { userLogin, userLogout, createSpace } from "./userActions";
import { loader, dismissNotification, error, scrape, discardScraped } from "./utilsActions";

export const USER_FETCHED = "USER_FETCHED";
export const USER_LOGIN = "USER_LOGIN";
export const NEW_USER = "NEW_USER";
export const USER_LOGOUT = "USER_LOGOUT";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const FETCH_SPACES = "FETCH_SPACES";
export const SPACES_FETCHED = "SPACES_FETCHED";
export const DISMISS_NOTIFICATION = "DISMISS_NOTIFICATION";
export const SCRAPE = "SCRAPE";
export const SCRAPED = "SCRAPED";
export const DISCARD_SCRAPED = "DISCARD_SCRAPED";
export const CREATE_SPACE = "CREATE_SPACE";
export const SPACE_SAVED = "SPACE_SAVED";

export {
	loader,
	userLogout,
	userLogin,
	dismissNotification,
	error,
	scrape,
	discardScraped,
	createSpace,
};
