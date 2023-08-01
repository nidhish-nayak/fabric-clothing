import { createSelector } from "reselect";
import { RootState } from "../store";
import {
	CategoriesStateType,
	CategoriesType,
	ItemsType,
} from "./categories.types";

const selectCategoryReducer = (state: RootState) => {
	return state.categories;
};

// Using memoization and caching through createSelector Hook
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice: CategoriesStateType) => {
		return categoriesSlice.categories;
	}
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories: CategoriesType[]) =>
		categories.reduce((acc: { [key: string]: ItemsType[] }, category) => {
			const { title, items } = category;
			if (title && items) {
				acc[title.toLowerCase()] = items;
			}
			return acc;
		}, {})
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice: CategoriesStateType) => categoriesSlice.isLoading
);
