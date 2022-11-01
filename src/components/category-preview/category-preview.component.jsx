import React from "react";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.jsx";
import {
    CategoryPreviewContainer,
    Preview,
    Title,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
