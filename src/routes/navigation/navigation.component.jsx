import React, { Fragment, useContext } from "react"; //Fragment is used if no parent div element is needed
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import { CartContext } from "../../contexts/cart.context";
import { userSelector } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
    Logo,
    LogoContainer,
    NavLink,
    NavLinks,
    NavigationContainer
} from "./navigation.styles.jsx";

const Navigation = () => {
    const currentUser = useSelector(userSelector);
    // const { currentUser } = useContext(UserContext);
    const { cartStatus } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {cartStatus && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
