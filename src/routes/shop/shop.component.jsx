import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className="shop-container">
            {products.map(({ id, name, price, imageUrl }) => (
                <ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
            ))}
        </div>
    )
}

export default Shop;