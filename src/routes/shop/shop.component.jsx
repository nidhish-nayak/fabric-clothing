import React, { useContext, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                    <h1>{title}</h1>
                    <div className="shop-container">
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    );
};

export default Shop;
