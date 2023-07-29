import styled from "styled-components";

type IsUserLoggedType = {
	isUserLogged: string;
};

export const CartIconContainer = styled.div<IsUserLoggedType>`
	margin: ${({ isUserLogged }) => isUserLogged};
	min-height: 25px;
	min-width: 25px;
	position: relative;

	&:hover {
		cursor: pointer;
		font-weight: 900;
	}

	svg {
		position: absolute;
		margin: 0.01em;
	}
`;

export const ItemCount = styled.span`
	padding: 1px 0 0 0;
	font-size: 0.75rem;
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
