import { createSelector } from "reselect";

// These 3 sets of code is used to memoize the data from state instead of re-render
// state = categories: {categories: [{title: "hats", items: [...]},{title: "mens", items: [...]}...]}

const selectCategoryReducer = (state) => {
    // returning {categories: [{title: "hats", items: [...]},{title: "mens", items: [...]}...]}
    return state.categories;
}

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        // returning [{title: "hats", items: [...]},{title: "mens", items: [...]}...]
        return categoriesSlice.categories
    }
)

// using selectors to modify data as we want for the components instead of firebase.util.js
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            // Converting to = {hats:[], mens:[], womens:[], sneakers:[], jackets:[]}
            return acc;
        }, {})
)