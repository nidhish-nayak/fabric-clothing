import { createSelector } from "reselect";
import { RootState } from "../store";
import { Categories, CategoriesState, Items } from "./categories.types";

const selectCategoryReducer = (state: RootState) => {
	return state.categories;
};

// Using memoization and caching through createSelector Hook
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice: CategoriesState) => {
		return categoriesSlice.categories;
	}
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories: Categories[]) =>
		categories.reduce((acc: { [key: string]: Items[] }, category) => {
			const { title, items } = category;
			if (title && items) {
				acc[title.toLowerCase()] = items;
			}
			return acc;
		}, {})
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice: CategoriesState) => categoriesSlice.isLoading
);
