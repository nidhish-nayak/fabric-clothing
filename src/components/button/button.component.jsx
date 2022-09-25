import React from "react";
import './button.styles.scss';

//Button Types = 1.Google SignIn, 2.Inverted, 3.SignIn
const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;