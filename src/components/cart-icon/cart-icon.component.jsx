import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {

    const cartStatus = (event) => {
        console.log(event)
    }

    return (
        <div className="cart-icon-container" onClick={(event) => { cartStatus(event) }}>
            <ShopIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;