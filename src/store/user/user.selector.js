export const userSelector = (state) => {
  return state.user.currentUser;
};

export const userProfileImageSelector = (state) => {
  return state.user.currentUser.photoURL;
};

export const selectIsUserProfileOpen = (state) => {
  return state.user.isUserProfileOpen;
};
