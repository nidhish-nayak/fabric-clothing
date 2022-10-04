import React from "react";
import SHOP_DATA from '../../data/SHOP_DATA.json';

const Shop = () => {
    return (
        <div>
            {SHOP_DATA.map(({ id, name }) => (
                <div id={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;