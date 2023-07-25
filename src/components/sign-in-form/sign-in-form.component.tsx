import { ChangeEvent, FormEvent, useState } from "react";

import {
	createUserDocFromAuth,
	signInWithGooglePopup,
	userSignInWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
	email: "",
	password: "",
};

const SingInForm = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		await createUserDocFromAuth(response.user);
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			await userSignInWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	return (
		<SignInContainer>
			<h2>Already have an account ?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				/>

				<ButtonsContainer>
					<Button type="submit">Sign In</Button>
					{/* Here type='button' is used to prevent form submission on google popup click */}
					<Button
						type="button"
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={logGoogleUser}
					>
						Sign In with Google
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SingInForm;
