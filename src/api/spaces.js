export const auth = obj => {
	const params = `${encodeURIComponent("token")}=${encodeURIComponent(obj.Zi.id_token)}`;

	return fetch("/auth/google", {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: params,
	}).then(res => res.json());
};

export const fetchUserSpaces = () => {
	return fetch("/api/getSpaces", {
		credentials: "same-origin",
	}).then(res => res.json());
};

export const handshake = () => {
	return fetch("/api/handshake", {
		credentials: "same-origin",
	}).then(res => res.json());
};

export const logout = () => {
	return fetch("/auth/logout", {
		method: "POST",
		credentials: "same-origin",
	}).then(res => res.json());
};

export const scrape = url => {
	// debugger; // eslint-disable-line
	return fetch(`/api/scrape?url=${url}`, {
		credentials: "same-origin",
	}).then(res => res.json());
};

export const createSpace = (name, description, isPublic, color = "#fff") => {
	// I don't like this, later
	const params = `${encodeURIComponent("name")}=${encodeURIComponent(name)}
		&${encodeURIComponent("description")}=${encodeURIComponent(description)}
		&${encodeURIComponent("isPublic")}=${encodeURIComponent(isPublic)}
		&${encodeURIComponent("color")}=${encodeURIComponent(color)}`;

	return fetch("/api/createSpace", {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: params,
	}).then(res => res.json());
};
