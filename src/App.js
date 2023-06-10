import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import { setCurrentUser } from "./store/user/user.action.js";
import {
    createUserDocFromAuth,
    onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils.js";

const App = () => {
    const dispatch = useDispatch();

    // onAuthStateChangedListener has a callback which triggers on user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;

        // This dispatch is to avoid warnings and not re-rendered on dispatch change
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
