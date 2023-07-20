import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Error } from "../../utils/redux/reduxUtils";

export type Items = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

export type Categories = {
	items?: Items[];
	title?: string;
};

export type CategoriesState = {
	readonly categories: Categories[];
	readonly isLoading: boolean;
	readonly error?: Error | null | unknown;
};

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

export const fetchCategoriesAsync = () => async (dispatch: Dispatch) => {
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
