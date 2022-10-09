import React, { Fragment, useContext } from "react"; //Fragment is used if no parent div element is needed
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';
import { CartContext } from '../../contexts/cart.context';
import './navigation.styles.scss';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { cartStatus } = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            (<span className="nav-link" onClick={signOutUser}>
                                SIGN OUT
                            </span>)
                            :
                            (<Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>)
                    }
                    <CartIcon />
                </div>
                {
                    cartStatus ? <CartDropdown /> : console.log("Cart closed state")
                }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;