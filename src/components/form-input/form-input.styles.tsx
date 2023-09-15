import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const ShrinkLabel = css`
	top: -14px;
	font-size: 12px;
	color: ${mainColor};
`;

type FormInputLabelProps = {
	ifShrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	${({ ifShrink }) => ifShrink && ShrinkLabel}

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 3rem;
	}
`;

export const FormInputValue = styled.input`
	background: none;
	background-color: white;
	color: ${subColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColor};
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${FormInputLabel} {
		${ShrinkLabel}
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 3rem;

		&:focus ~ ${FormInputLabel} {
			top: -14px;
			font-size: 1rem;
		}
	}
`;

export const Group = styled.div`
	position: relative;
	margin: 45px 0;
	${FormInputValue}
	${FormInputLabel}
    input[type="password"] {
		letter-spacing: 0.3em;
	}
`;
