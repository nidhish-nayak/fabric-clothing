export const categoriesSelector = (state) => state.categories.categories
    .reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        console.log(acc);
        return acc;
    }, {});