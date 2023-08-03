import styled from "styled-components";

export const PolicyContainer = styled.section`
	margin: auto 5em;
	padding: 2em 6em 6em 6em;

	@media (max-width: 1024px) {
		padding: 0;
	}

	@media (max-width: 480px) {
		margin: auto 1em;
	}
`;

export const PolicyTitle = styled.h1`
	text-align: center;
	font-size: 3rem;
	font-family: "Bebas Neue", sans-serif;

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
`;

export const PolicyDesc = styled.ol`
	font-size: 1rem;
	padding-top: 1em;
	padding-left: 1em;
	font-family: "Montserrat", sans-serif;
	margin: auto 10em;

	li {
		margin-top: 1em;
	}

	a {
		background: black;
		color: white;
	}

	a:hover {
		background: #ececec;
		color: #333;
	}

	@media (max-width: 1024px) {
		margin: 0;
	}

	@media (max-width: 480px) {
		font-size: 0.75rem;
	}
`;
