import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { setIsProfileOpen } from "../../store/user/user.reducer";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsUserProfileOpen } from "../../store/user/user.selector";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const isUserProfileOpen = useSelector(selectIsUserProfileOpen)

    const toggleUserProfileOnSelectingCart = () => {
        isUserProfileOpen && dispatch(setIsProfileOpen(!isUserProfileOpen))
    }

    const toggleIsCartOpen = () => {
        toggleUserProfileOnSelectingCart()
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
