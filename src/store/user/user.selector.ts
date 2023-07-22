import { RootState } from "../store";

export const userSelector = (state: RootState) => {
	return state.user.currentUser;
};

export const selectIsUserProfileOpen = (state: RootState) => {
	return state.user.isUserProfileOpen;
};

export const selectUserProfileImage = (state: RootState) => {
	if (state.user.currentUser) {
		return state.user.currentUser.photoURL;
	} else {
		console.log("CurrentUser is null: ", state.user.currentUser);
	}
};

export const selectProfileUserName = (state: RootState) => {
	if (state.user.currentUser) {
		return state.user.currentUser.displayName;
	} else {
		console.log("CurrentUser is null: ", state.user.currentUser);
	}
};

export const selectProfileUserEmail = (state: RootState) => {
	if (state.user.currentUser) {
		return state.user.currentUser.email;
	} else {
		console.log("CurrentUser is null: ", state.user.currentUser);
	}
};
