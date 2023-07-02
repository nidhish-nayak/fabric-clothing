import React from "react";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

import { default as BUTTON_TYPE_CLASSES, default as Button } from "../button/button.component";

import "./product-card.styles.jsx";
import {
    Footer,
    Name,
    Price,
    ProductCardContainer,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;
    const addProductToCart = () => dispatch(addItemToCart(product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>
                    <span>₹</span>
                    {`${price}`}
                </Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to Cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
