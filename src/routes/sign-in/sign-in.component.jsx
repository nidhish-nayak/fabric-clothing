import React from "react";
import { singInWithGooglePopup } from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await singInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>My Sing In Page: </h1>
            <button onClick={logGoogleUser}>Sing In</button>
        </div>
    )
}

export default SignIn;