import React from "react";

import "./button.styles.jsx";

import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    SpinnerContainer
} from "./button.styles";

//Button Types = 1.Google SignIn, 2.Inverted, 3.SignIn
export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {
                isLoading ?
                    <SpinnerContainer />
                    :
                    children
            }
        </CustomButton>
    )
};

export default Button;
