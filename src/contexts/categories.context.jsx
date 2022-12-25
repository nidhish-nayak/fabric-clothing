import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const categoriesReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in the userReducer !`);
    }
};

const INITIAL_STATE = {
    categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
    // const [categoriesMap, setCategoriesMap] = useState({});
    const [{ categoriesMap }, dispatch] = useReducer(
        categoriesReducer,
        INITIAL_STATE
    );
    const value = { categoriesMap };

    const setCategoriesMap = (categoryMap) => {
        dispatch({
            type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
            payload: categoryMap,
        });
    };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
