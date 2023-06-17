import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import logo from '../../assets/Logo.png';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { userSelector } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
    FabricLogo,
    LogoContainer,
    NavLink,
    NavLinks,
    NavigationContainer
} from "./navigation.styles.jsx";

const Navigation = () => {

    const currentUser = useSelector(userSelector);
    const isCartOpen = useSelector(selectIsCartOpen);

    // Transparent navbar on scroll
    const [isTransparent, setIsTransparent] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const shouldTransparent = scrollPosition >= 70;
            setIsTransparent(shouldTransparent);
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <NavigationContainer transparent={isTransparent}>
                <LogoContainer to="/">
                    <FabricLogo src={logo} alt='Logo' />
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
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
