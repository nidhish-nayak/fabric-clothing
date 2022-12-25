import { createContext, useEffect, useReducer } from "react";

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

const removeCartHelper = (cartItems, productToRemove) => {
    const ifItemExists = cartItems.find((i) => i.id === productToRemove.id);
    if (ifItemExists) {
        return cartItems.map((i) =>
            i.id === productToRemove.id ? { ...i, count: i.count - 1 } : i
        );
    } else {
        console.log("Error");
    }
};

export const CartContext = createContext({
    cartStatus: false,
    setCartStatus: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    removeWholeItem: () => {},
});

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_STATUS:
            return {
                ...state,
                cartStatus: payload,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            };
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in the userReducer !`);
    }
};

export const CART_ACTION_TYPES = {
    SET_CART_STATUS: "SET_CART_STATUS",
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_CART_COUNT: "SET_CART_COUNT",
};

const INITIAL_STATE = {
    cartStatus: false,
    cartItems: [],
    cartCount: 0,
};

export const CartProvider = ({ children }) => {
    const [{ cartStatus, cartItems, cartCount }, dispatch] = useReducer(
        cartReducer,
        INITIAL_STATE
    );

    // Dispatch method for setCartStatus, setCartItems and setCartCount
    const setCartCount = (newCartCount) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_COUNT,
            payload: newCartCount,
        });
    };

    const setCartItems = (product) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: product,
        });
    };

    const setCartStatus = (status) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_STATUS,
            payload: status,
        });
    };

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

    const removeItemFromCart = (productToRemove) => {
        if (productToRemove.count === 1) {
            cartItems.map(
                (i) =>
                    i.id === productToRemove.id &&
                    setCartItems(
                        cartItems.filter((i) => i.id !== productToRemove.id)
                    )
            );
        } else {
            setCartItems(removeCartHelper(cartItems, productToRemove));
        }
    };

    const removeWholeItem = (removeItem) => {
        cartItems.map(
            (i) =>
                i.id === removeItem.id &&
                setCartItems(cartItems.filter((i) => i.id !== removeItem.id))
        );
    };

    const value = {
        cartStatus,
        setCartStatus,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        removeWholeItem,
        cartCount,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
