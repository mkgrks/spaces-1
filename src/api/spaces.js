//  id | full_name | first_name | email | avatar

export const auth = obj => {
	const searchParams = `${encodeURIComponent("token")}=${encodeURIComponent(obj.Zi.id_token)}`;

	return fetch(`/auth/google`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: searchParams,
	}).then(r => r.json());
};

export const fetchUserSpaces = owner => {
	return fetch(`/api/getSpaces?owner=${owner}`).then(r => r.json());
};
