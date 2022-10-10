import { createContext, useState } from 'react';

export const AddtocartContext = createContext({
    cartContent: null,
    setCartStatus: () => { },
})

export const AddtocartProvider = ({ children }) => {

    const [cartContent, setCartContent] = useState([]);
    const value = { cartContent, setCartContent };

    return <AddtocartContext.Provider value={value}>{children}</AddtocartContext.Provider>

}