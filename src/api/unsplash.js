export const fetchThumbnails = number => {
	return fetch(
		`https://api.unsplash.com/photos/random?count=${number}&client_id=3d8ae4ee5bdfafb726827ec874ed92fd6e2c137dd88eca5f66f70165d28035e9`
	).then(r => r.json());
};
