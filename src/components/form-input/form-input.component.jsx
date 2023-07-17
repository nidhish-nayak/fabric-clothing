
import { FormInputLabel, FormInputValue, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <FormInputValue {...otherProps} />
            {label && (
                <FormInputLabel ifShrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
