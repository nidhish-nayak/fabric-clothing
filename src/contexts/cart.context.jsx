import { createContext, useState } from "react";

const addToCartHelper = (cartItems, productToAdd) => {
    // Find if the product is already present
    const ifItemExists = cartItems.find((i) => i.id === productToAdd.id);
    // Add the items to cart / Update count if already present
    if (ifItemExists) {
        return cartItems.map((i) =>
            i.id === productToAdd.id ? { ...i, count: i.count + 1 } : i
        );
    } else {
        return [...cartItems, productToAdd];
    }
};

export const CartContext = createContext({
    cartStatus: false,
    setCartStatus: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [cartStatus, setCartStatus] = useState();
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addToCartHelper(cartItems, productToAdd));
    };

    const value = { cartStatus, setCartStatus };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
