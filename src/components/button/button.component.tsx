import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./button.styles";

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
	SpinnerContainer,
} from "./button.styles";

//Button Types = 1.Google SignIn, 2.Inverted, 3.SignIn
export enum BUTTON_TYPE_CLASSES {
	base = "base",
	google = "google-sign-in",
	inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]);

export type ButtonProps = {
	children: ReactNode;
	buttonType?: BUTTON_TYPE_CLASSES;
	isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	children,
	buttonType,
	isLoading,
	...otherProps
}) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <SpinnerContainer /> : children}
		</CustomButton>
	);
};

export default Button;
