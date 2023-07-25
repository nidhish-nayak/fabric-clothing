import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentUser, UserState } from "./user.types";

const INITIAL_STATE: UserState = {
	currentUser: null,
	isUserProfileOpen: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
			state.currentUser = action.payload;
		},
		setIsProfileOpen: (state, action: PayloadAction<boolean>) => {
			state.isUserProfileOpen = action.payload;
		},
	},
});

export const { setCurrentUser, setIsProfileOpen } = userSlice.actions;

export default userSlice.reducer;
