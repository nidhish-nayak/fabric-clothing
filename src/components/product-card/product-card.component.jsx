import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
    default as Button,
    default as BUTTON_TYPE_CLASSES,
} from "../button/button.component";
import "./product-card.styles.jsx";
import {
    Footer,
    Name,
    Price,
    ProductCardContainer,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt="Loading" />
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
