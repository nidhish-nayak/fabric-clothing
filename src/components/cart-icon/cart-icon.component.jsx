import { useContext } from 'react';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {

    const { cartStatus, setCartStatus } = useContext(CartContext);

    return (
        <div className="cart-icon-container" onClick={() => {
            if (cartStatus) {
                setCartStatus(false)
            }
            else setCartStatus(true);
        }}>
            <ShopIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;