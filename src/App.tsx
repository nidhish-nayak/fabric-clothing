import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Policies from "./routes/policies/policies.component";
import Shop from "./routes/shop/shop.component";
import { setCurrentUser } from "./store/user/user.reducer";

import { User } from "firebase/auth";
import { CurrentUserType } from "./store/user/user.types";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

export type ExtendedUserType = User & {
	accessToken?: string | null;
};

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(
			(user: ExtendedUserType | null) => {
				if (user) {
					createUserDocFromAuth(user);
				}
				// immediately invoked function expression (IIFE) => to get serialized user data
				const serializedUser: CurrentUserType =
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
			}
		);
		return unsubscribe;
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="policy" element={<Policies />} />
			</Route>
		</Routes>
	);
};

export default App;
