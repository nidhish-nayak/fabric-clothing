import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsProfileOpen } from "../../store/user/user.reducer";
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
            <img src={profileImageURL} alt="Profile_Image" />
        </ProfileContainer>
    );
}

export default Profile;