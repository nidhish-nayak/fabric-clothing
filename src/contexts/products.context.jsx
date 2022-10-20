import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../data/shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products] = useState([]);
    const value = { products };

    useEffect(() => {
        addCollectionAndDocuments("categories", SHOP_DATA);
    }, []);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
