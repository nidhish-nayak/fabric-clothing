import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { createSlice } from "@reduxjs/toolkit";

// Initializing redux-thunk: Migrating async fetch from shop component to reducer
export const CATEGORIES_INITIAL_STATE = {
	categories: [],
	isLoading: true,
	error: null,
};

export const categoriesSlice = createSlice({
	name: "categories",
	initialState: CATEGORIES_INITIAL_STATE,
	reducers: {
		fetchCategoriesStart: (state) => {
			state.isLoading = true;
		},
		fetchCategoriesSuccess: (state, action) => {
			state.categories = action.payload;
			state.isLoading = false;
		},
		fetchCategoriesFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
	},
});

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray = await getCategoriesAndDocuments("categories");
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error));
	}
};

export const {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailed,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
