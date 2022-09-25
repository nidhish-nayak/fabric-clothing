import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className="auth-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;