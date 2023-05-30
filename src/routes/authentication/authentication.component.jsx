import React, { Fragment } from "react";
import Footer from "../../components/footer/footer.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import { AuthContainer } from "./authentication.styles.jsx";

const Authentication = () => {
    return (
        <Fragment>
            <AuthContainer>
                <SignInForm />
                <SignUpForm />
            </AuthContainer>
            <Footer />
        </Fragment>
    );
};

export default Authentication;
