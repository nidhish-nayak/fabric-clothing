import { createContext, useEffect, useReducer } from "react";
import {
    createUserDocFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
    currentUser: null,
};

// Context API
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// User Reducer used instead of useState for Redux implementation
const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in the userReducer !`);
    }
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    };
    const value = { currentUser, setCurrentUser };

    // This is called when component is rendered & it listens to auth
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // If Auth state changed - new user doc is created in DB and the new user is updated
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
