import { createContext, useEffect, useReducer } from "react";
import {
    createUserDocFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

//Context API
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

//We will be using Redux here post context api
const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            throw new Error(`Unhandled type ${type} in the userReducer !`);
    }
};

const INITIAL_STATE = {
    currentUser: null,
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    };

    //Add useState here to access setState anywhere in the child component
    const value = { currentUser, setCurrentUser };

    //This is called when component is mounted & listens to auth
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // This callback just returns the same value of getAuth() but the updated one if auth state is changed
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    console.log(currentUser);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
