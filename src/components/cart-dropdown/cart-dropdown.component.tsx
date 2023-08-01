import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { selectCartItems } from "../../store/cart/cart.selector";

import { AppDispatch } from "../../store/store";
import "./cart-dropdown.styles";
import {
	CartDropDownContainer,
	CartItemContainer,
	EmptyMessage,
} from "./cart-dropdown.styles";

import { CartItemType } from "../../store/cart/cart.types";

const CartDropdown = () => {
	const dispatch: AppDispatch = useDispatch();
	const cartItems: CartItemType[] = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		dispatch(setIsCartOpen(false));
		navigate("/checkout");
	};

	return (
		<CartDropDownContainer>
			<CartItemContainer>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} cartItemProps={item} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItemContainer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.base}
				onClick={goToCheckoutHandler}
			>
				{" "}
				GO TO CHECKOUT{" "}
			</Button>
		</CartDropDownContainer>
	);
};

export default CartDropdown;
