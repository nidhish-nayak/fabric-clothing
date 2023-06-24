import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";

import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils.js";

import { setCurrentUser } from "./store/user/user.reducer.js";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocFromAuth(user);
			}
			// immediately invoked function expression (IIFE) => to get serialized user data
			const serializedUser =
				user &&
				(({
					uid,
					accessToken,
					email,
					displayName,
					emailVerified,
					photoURL,
				}) => ({
					uid,
					accessToken,
					email,
					displayName,
					emailVerified,
					photoURL,
				}))(user);

			dispatch(setCurrentUser(serializedUser));
		});
		return unsubscribe;
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
