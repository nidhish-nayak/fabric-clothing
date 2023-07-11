import { Fragment } from "react";
import { useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
    selectProfileUserEmail,
    selectProfileUserName,
    selectUserProfileImage,
    userSelector
} from "../../store/user/user.selector";

import { ProfileDetails, ProfileDropDownContainer, ProfileEmail, ProfileName } from "./profile-dropdown.styles";

const ProfileDetailsComponent = () => {

    const imageURL = useSelector(selectUserProfileImage);
    const userName = useSelector(selectProfileUserName);
    const userEmail = useSelector(selectProfileUserEmail);

    return (
        <ProfileDetails>
            <img src={imageURL ? imageURL : "https://i.ibb.co/D1RV7Lj/default-user.webp"} alt="Profile_Image" />
            <ProfileName>{userName}</ProfileName>
            <ProfileEmail>Email: {userEmail}</ProfileEmail>
        </ProfileDetails>
    );
};

const ProfileDropDown = () => {

    const userDetails = useSelector(userSelector);

    return (
        <Fragment>
            {userDetails &&
                <ProfileDropDownContainer>
                    <ProfileDetailsComponent />
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={signOutUser}>
                        SIGN OUT
                    </Button>
                </ProfileDropDownContainer>
            }
        </Fragment>
    );
};

export default ProfileDropDown;
