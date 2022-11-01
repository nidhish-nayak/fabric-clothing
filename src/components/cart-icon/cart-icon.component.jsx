import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
    const { cartStatus, setCartStatus, cartCount } = useContext(CartContext);

    return (
        <CartIconContainer
            onClick={() => {
                if (cartStatus) {
                    setCartStatus(false);
                } else setCartStatus(true);
            }}
        >
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
