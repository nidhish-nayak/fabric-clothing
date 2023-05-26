import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
    return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.categories
    }
)

// use selectors to modify data as we want for the components instead of firebase.util.js
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            console.log(acc);
            return acc;
        }, {})
)