import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
    default as BUTTON_TYPE_CLASSES,
    default as Button,
} from "../button/button.component";
import "./product-card.styles.jsx";
import {
    Footer,
    Name,
    Price,
    ProductCardContainer,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, imageUrl } = product;
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{`$${price}`}</Price>
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
