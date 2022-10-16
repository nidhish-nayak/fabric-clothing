import { createContext, useEffect, useState } from "react";

const addToCartHelper = (cartItems, productToAdd) => {
    // Find if the product is already present
    const ifItemExists = cartItems.find((i) => i.id === productToAdd.id);
    // Add the items to cart / Update count if already present
    if (ifItemExists) {
        return cartItems.map((i) =>
            i.id === productToAdd.id ? { ...i, count: i.count + 1 } : i
        );
    } else {
        return [...cartItems, { ...productToAdd, count: 1 }];
    }
};

export const CartContext = createContext({
    cartStatus: false,
    setCartStatus: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [cartStatus, setCartStatus] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItems) => total + cartItems.count,
            0
        );
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addToCartHelper(cartItems, productToAdd));
    };

    const value = {
        cartStatus,
        setCartStatus,
        cartItems,
        addItemToCart,
        cartCount,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
