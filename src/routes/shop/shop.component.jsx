import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesAsync } from '../../store/categories/categoriesSlice';
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const dispatch = useDispatch();

    // Redux Thunk - fetch categories data from DB
    // Here dispatch is added as dependent is wrong, and is added just to avoid warnings. 
    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
