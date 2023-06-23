import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isUserProfileOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setIsProfileOpen: (state, action) => {
      state.isUserProfileOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser, setIsProfileOpen } = userSlice.actions;

export default userSlice.reducer;
