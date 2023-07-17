import { Fragment, useEffect, useState } from "react"; //Fragment is used if no parent div element is needed
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import Logo from "../../components/logo/logo.component";
import ProfileDropDown from "../../components/profile-dropdown/profile-dropdown.component";
import Profile from "../../components/profile/profile.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsUserProfileOpen, userSelector } from "../../store/user/user.selector";

import {
    NavLink,
    NavLinks,
    NavigationContainer
} from "./navigation.styles";

const Navigation = () => {

    const currentUser = useSelector(userSelector);
    const isCartOpen = useSelector(selectIsCartOpen);
    const isUserProfileOpen = useSelector(selectIsUserProfileOpen);

    // Transparent navbar on scroll
    const [isTransparent, setIsTransparent] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const shouldTransparent = scrollPosition >= 90;
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
                <Logo to="/" />
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <Fragment>
                            <CartIcon />
                            <Profile />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <NavLink to="/auth">SIGN IN</NavLink>
                            <CartIcon />
                        </Fragment>
                    )}
                </NavLinks>
                {isUserProfileOpen && <ProfileDropDown />}
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
