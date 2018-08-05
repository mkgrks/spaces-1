import { LOADING, DISMISS_NOTIFICATION, ERROR, SCRAPE, DISCARD_SCRAPED } from ".";

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

export const scrape = url => {
	return {
		type: SCRAPE,
		url,
	};
};

export const discardScraped = () => {
	return {
		type: DISCARD_SCRAPED,
	};
};
