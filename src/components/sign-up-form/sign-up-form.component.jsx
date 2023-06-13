import React, { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.jsx";
import { SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match !");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocFromAuth(user.user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use !");
            } else {
                console.log("Error: " + error);
            }
        }
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form
                onSubmit={(event) => {
                    handleSubmit(event);
                }}
            >
                <FormInput
                    label="Display Name: "
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email: "
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password: "
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                    minLength="6"
                />

                <FormInput
                    label="Confirm Password: "
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                    minLength="6"
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
