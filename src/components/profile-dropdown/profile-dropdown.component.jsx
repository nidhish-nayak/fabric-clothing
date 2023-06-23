import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProfileDetails, ProfileDropDownContainer, ProfileEmail, ProfileName } from "./profile-dropdown.styles";

const ProfileDropDown = () => {
    const userDetails = useSelector(userSelector);
    console.log(userDetails);
    const { photoURL, displayName, email } = userDetails;

    return (
        <ProfileDropDownContainer>
            <ProfileDetails>
                <img src={photoURL} alt="Profile_Image" />
                <ProfileName>{displayName}</ProfileName>
                <ProfileEmail>Email: {email}</ProfileEmail>
            </ProfileDetails>
            <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={signOutUser}>
                SIGN OUT
            </Button>
        </ProfileDropDownContainer>
    )
}

export default ProfileDropDown;