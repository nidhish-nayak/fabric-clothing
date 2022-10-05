import { createContext, useState } from "react";
import SHOP_DATA from '../data/SHOP_DATA.json';

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {

    const [products] = useState(SHOP_DATA);
    const value = { products };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}