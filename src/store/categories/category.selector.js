// This logic was migrated here from firebase.utils.js since we will be using selectors to modify data as we want for the components
export const categoriesSelector = (state) => {
    return state.categories.categories
        .reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            console.log(acc);
            return acc;
        }, {});
}