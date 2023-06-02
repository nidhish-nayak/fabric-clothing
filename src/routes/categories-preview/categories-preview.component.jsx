import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Footer from "../../components/footer/footer.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { CategoriesPreviewContainer } from "./categories-preview.styles";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment>
            <CategoriesPreviewContainer>
                {Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={products}
                        />
                    );
                })}
            </CategoriesPreviewContainer>
            <Footer />
        </Fragment>
    );
};

export default CategoriesPreview;
