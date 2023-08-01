import { Fragment } from "react";

import Footer from "../../components/footer/footer.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthContainer } from "./authentication.styles";

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
