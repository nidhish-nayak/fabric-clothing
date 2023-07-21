import { UserSelector } from "./user.types";

export const userSelector = (state: UserSelector) => {
	return state.user.currentUser;
};

export const selectIsUserProfileOpen = (state: UserSelector) => {
	return state.user.isUserProfileOpen;
};

export const selectUserProfileImage = (state: UserSelector) => {
	if (state.user.currentUser) {
		return state.user.currentUser.photoURL;
	} else {
		console.log("CurrentUser is null: ", state.user.currentUser);
	}
};

export const selectProfileUserName = (state: UserSelector) => {
	if (state.user.currentUser) {
		return state.user.currentUser.displayName;
	} else {
		console.log("CurrentUser is null: ", state.user.currentUser);
	}
};

export const selectProfileUserEmail = (state: UserSelector) => {
	if (state.user.currentUser) {
		return state.user.currentUser.email;
	} else {
		console.log("CurrentUser is null: ", state.user.currentUser);
	}
};
