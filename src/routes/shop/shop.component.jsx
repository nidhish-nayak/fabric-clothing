import React from "react";
import SHOP_DATA from '../../data/SHOP_DATA.json';

const Shop = () => {
    return (
        <div>
            {SHOP_DATA.map(product => (
                <div id={product.id}>
                    <h1>
                        {product.title}
                    </h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;