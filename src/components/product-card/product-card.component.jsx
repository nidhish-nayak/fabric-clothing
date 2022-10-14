import React, { useContext } from "react";
import { AddtocartContext } from '../../contexts/addtocart.context';
import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {

    const { id, name, price, imageUrl } = product;
    const { cartContent, setCartContent } = useContext(AddtocartContext);

    const addProductToCart = (newValue) => {
        // To check if the item exists in cart then do not add
        if (!cartContent.some(i => i['id'] === newValue.id)) {
            setCartContent([...cartContent, newValue])
        }
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt="Loading" />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{`$${price}`}</span>
            </div>
            <Button buttonType='inverted' onClick={() => {
                addProductToCart({ id: id, name: name, imageUrl: imageUrl, price: price, count: 1 })
            }}>
                Add to Cart
            </Button>
        </div>
    )
}

export default ProductCard;