import { createSelector } from "reselect";
import { Categories, CategoriesState, Items } from "./categories.reducer";

type CategoriesSelector = {
	categories: CategoriesState;
};

const selectCategoryReducer = (state: CategoriesSelector) => {
	return state.categories;
};

// Using memoization and caching through createSelector Hook
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => {
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
	(categoriesSlice) => categoriesSlice.isLoading
);
