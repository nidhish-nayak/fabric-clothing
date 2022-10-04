import React from "react";
import Data from '../../Data.json';

const Shop = () => {
    return (
        <div>
            {Data.map(product => (
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