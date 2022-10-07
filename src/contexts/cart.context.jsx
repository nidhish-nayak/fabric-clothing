import { createContext, useState } from 'react';

export const CartContext = createContext({
    cartStatus: null
})

export const CartProvider = ({ children }) => {

    const [cartStatus, setCartStatus] = useState();
    const value = { cartStatus, setCartStatus };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}