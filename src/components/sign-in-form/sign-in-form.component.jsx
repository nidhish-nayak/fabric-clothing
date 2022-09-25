import React from "react";
import { createUserDocFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils.js';
import Button from "../button/button.component";

const SingInForm = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response.user);
        const userDocRef = await createUserDocFromAuth(response.user);
        console.log(userDocRef);
    }

    return (
        <div className="sign-in-container">
            <h1>My Sing In Page: </h1>
            <Button buttonType='google' onClick={logGoogleUser}>Sign In with Google</Button>
        </div>
    )
}

export default SingInForm;