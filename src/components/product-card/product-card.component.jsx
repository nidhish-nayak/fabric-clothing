import React, { useContext } from "react";
import Button from '../button/button.component';
import { AddtocartContext } from '../../contexts/addtocart.context';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    const { setCartContent } = useContext(AddtocartContext);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt="Loading" />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{`$${price}`}</span>
            </div>
            <Button buttonType='inverted' onClick={() => { setCartContent(name) }}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;