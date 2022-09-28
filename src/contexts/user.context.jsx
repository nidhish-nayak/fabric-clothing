import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

//Context API
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    //Add useState here to access setState anywhere in the child component
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    //This is called when component is mounted & listens to auth
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener();
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}