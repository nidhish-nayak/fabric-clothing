import styled from "styled-components";
import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "../button/button.styles";

export const ProfileDropDownContainer = styled.div`
	position: absolute;
	max-width: 280px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	${BaseButton},
	${GoogleSignInButton},
    ${InvertedButton} {
		margin-top: auto;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		top: 200px;
		right: 80px;
		font-size: 3rem;
		max-width: 1000px;
		padding: 1em;
	}
`;

export const ProfileDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	img {
		width: 5em;
		border-radius: 50%;
	}
`;

export const ProfileName = styled.h3`
	margin-top: 1em;
	margin-bottom: 0em;
`;

export const ProfileEmail = styled.p`
	margin-top: 1em;
	margin-bottom: 1em;
`;
