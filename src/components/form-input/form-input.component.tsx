import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, FormInputValue, Group } from "./form-input.styles";

type FormInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
	return (
		<Group>
			<FormInputValue {...otherProps} />
			{label && (
				<FormInputLabel
					ifShrink={Boolean(
						otherProps.value &&
							typeof otherProps.value === "string" &&
							otherProps.value.length
					)}
				>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
