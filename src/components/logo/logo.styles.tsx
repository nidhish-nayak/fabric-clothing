import styled from "styled-components";

export const TitleContainer = styled.div`
	padding: 0px;
	margin: auto 0;
	font-size: 1.25rem;
	font-family: "Bebas Neue", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	white-space: nowrap;
	background-color: white;

	&:hover {
		cursor: pointer;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 3rem;
	}
`;

export const TitleOne = styled.span`
	padding: 0.1em 0.25em 0.08em 0.25em;
	background-color: black;
	color: white;
`;

export const TitleTwo = styled.span`
	padding: 0.1em 0.25em 0.08em 0.25em;
`;
