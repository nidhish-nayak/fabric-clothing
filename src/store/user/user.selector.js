export const userSelector = (state) => {
	return state.user.currentUser;
};

export const selectIsUserProfileOpen = (state) => {
	return state.user.isUserProfileOpen;
};

export const selectUserProfileImage = (state) => {
	return state.user.currentUser.photoURL;
};

export const selectProfileUserName = (state) => {
	return state.user.currentUser.displayName;
};

export const selectProfileUserEmail = (state) => {
	return state.user.currentUser.email;
};
