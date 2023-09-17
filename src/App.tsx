import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { setCurrentUser } from "./store/user/user.reducer";

import { User } from "firebase/auth";
import Spinner from "./components/spinner/spinner.component";
import { CurrentUserType } from "./store/user/user.types";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

const Authentication = lazy(
	() => import("./routes/authentication/authentication.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(
	() => import("./routes/navigation/navigation.component")
);
const Policies = lazy(() => import("./routes/policies/policies.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));

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
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="shop/*" element={<Shop />} />
					<Route path="auth" element={<Authentication />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="policy" element={<Policies />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
