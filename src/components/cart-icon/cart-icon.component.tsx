import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { setIsProfileOpen } from "../../store/user/user.reducer";

import {
	selectCartCount,
	selectIsCartOpen,
} from "../../store/cart/cart.selector";
import {
	selectIsUserProfileOpen,
	userSelector,
} from "../../store/user/user.selector";

import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon: React.FC = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(userSelector);

	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const isUserProfileOpen = useSelector(selectIsUserProfileOpen);

	const toggleUserProfileOnSelectingCart = () => {
		isUserProfileOpen && dispatch(setIsProfileOpen(!isUserProfileOpen));
	};

	const toggleIsCartOpen = () => {
		toggleUserProfileOnSelectingCart();
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartIconContainer
			onClick={toggleIsCartOpen}
			isUserLogged={currentUser ? "1em" : "0 0 0 1em"}
		>
			<ShopIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
