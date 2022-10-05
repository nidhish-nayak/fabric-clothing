import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className="shop-container">
            {products.map(({ id, name }) => (
                <div className="shop-item" key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;