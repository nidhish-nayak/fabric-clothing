import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunkDispatch } from "../../routes/shop/shop.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Categories, CategoriesState } from "./categories.types";

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
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
		fetchCategoriesSuccess: (state, action: PayloadAction<Categories[]>) => {
			state.categories = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		fetchCategoriesFailed: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.isLoading = false;
		},
	},
});

// Thunk (Dispatch as an arguement for an async fetch function)
export const fetchCategoriesAsync =
	() => async (dispatch: AppThunkDispatch) => {
		dispatch(fetchCategoriesStart());
		try {
			const categoriesArray: Categories[] = await getCategoriesAndDocuments(
				"categories"
			);
			dispatch(fetchCategoriesSuccess(categoriesArray));
		} catch (error: any) {
			dispatch(fetchCategoriesFailed(error));
		}
	};

export const {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailed,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
