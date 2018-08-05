// import { fetchThumbnails } from "../api/unsplash";

export const errorMessages = e => {
	switch (e) {
		case "popup_closed_by_user":
			return "You have closed the popup before finishing the consent flow!";
		case "access_denied":
			return "You have denied the permission to the scopes required. Sorry to see you go.";
		case "immediate_failed":
			return "No user could be automatically selected without prompting the consent flow!";
		case "invalid_url":
			return "Maybe invalid URL. Unable to fetch info.";
		default:
			return "Something went wrong!";
	}
};

// export const defaultBoards = [
// 	{
// 		id: 1,
// 		name: "Group Interests",
// 		descr: "Group your interests",
// 	},
// ];
