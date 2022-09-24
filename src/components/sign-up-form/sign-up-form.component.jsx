import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    //Note: Do not destructure from default Form Fields, get data from the state
    const { displayName, email, password, confirmPassword } = formFields;

    //State handling - updating the state as the user types in the value
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    //Form Submir handling
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (event.target[2].value !== event.target[3].value) return;
        const response = await createAuthUserWithEmailAndPassword(event.target[1].value, event.target[2].value);
        console.log(response);
    }

    return (
        <div>
            <h1>Sign in with your email and password</h1>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <label >Display Name</label>
                <input
                    type="text" required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

                <label>Email</label>
                <input
                    type="email" required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <label>Password</label>
                <input
                    type="password" required
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <label>Confirm Password</label>
                <input type="password" required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />

                <button type="submit">SUBMIT</button>
            </form>
        </div >
    )
}

export default SignUpForm;