import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { setIsProfileOpen } from "../../store/user/user.reducer";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsUserProfileOpen, selectUserProfileImage } from "../../store/user/user.selector";

import { ProfileContainer } from "./profile.styles";

const Profile = () => {

    const dispatch = useDispatch();

    const profileImageURL = useSelector(selectUserProfileImage);
    const isUserProfileOpen = useSelector(selectIsUserProfileOpen);
    const isCartOpen = useSelector(selectIsCartOpen);

    // If Cart dropdown is open, close it on selecting userProfile
    const toggleCartOnSelectingUserProfile = () => {
        isCartOpen && dispatch(setIsCartOpen(!isCartOpen))
    }

    const toggleUserProfile = () => {
        toggleCartOnSelectingUserProfile();
        dispatch(setIsProfileOpen(!isUserProfileOpen))
    };

    return (
        <ProfileContainer onClick={toggleUserProfile}>
            <img
                src={profileImageURL ?
                    profileImageURL : "https://i.ibb.co/D1RV7Lj/default-user.webp"}
                alt="Profile_Image"
            />
        </ProfileContainer>
    );
}

export default Profile;