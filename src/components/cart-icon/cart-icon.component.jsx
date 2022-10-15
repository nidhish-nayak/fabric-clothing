import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { cartStatus, setCartStatus, cartItems } = useContext(CartContext);

    const addFunc = (value) => {
        const arrayOfCount = value.map((i) => i.count);
        return arrayOfCount.reduce((acc, cur) => acc + cur, 0);
    };

    return (
        <div
            className="cart-icon-container"
            onClick={() => {
                if (cartStatus) {
                    setCartStatus(false);
                } else setCartStatus(true);
            }}
        >
            <ShopIcon className="shopping-icon" />
            <span className="item-count">{addFunc(cartItems)}</span>
        </div>
    );
};

export default CartIcon;
