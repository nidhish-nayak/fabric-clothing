import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import { createUserDocFromAuth, singInWithGooglePopup } from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await singInWithGooglePopup();
        console.log(response.user);
        const userDocRef = await createUserDocFromAuth(response.user);
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>My Sing In Page: </h1>
            <button onClick={logGoogleUser}>Signin with Google</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;