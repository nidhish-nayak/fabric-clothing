import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import { AuthContainer } from "./authentication.styles.jsx";

const Authentication = () => {
    return (
        <AuthContainer>
            <SignInForm />
            <SignUpForm />
        </AuthContainer>
    );
};

export default Authentication;
