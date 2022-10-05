import React from "react";
import SHOP_DATA from '../../data/SHOP_DATA.json';
import './shop.styles.scss';

const Shop = () => {
    return (
        <div className="shop-container">
            {SHOP_DATA.map(({ id, name, imageUrl }) => (
                <div class="shop-item" id={id} style={{ backgroundImage: `url(${imageUrl})` }}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;