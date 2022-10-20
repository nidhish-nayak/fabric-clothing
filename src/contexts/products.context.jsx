import { createContext, useState } from "react";
import SHOP_DATA from "../data/shop-data.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products] = useState(SHOP_DATA[1].items);
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
