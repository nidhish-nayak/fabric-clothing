import styled from "styled-components";

export const ReleaseContainer = styled.section`
	margin: auto 5em;
	padding: 2em 6em 2em 6em;

	@media (max-width: 1024px) {
		padding: 0;
	}

	@media (max-width: 480px) {
		margin: auto 1em;
	}
`;

export const ReleaseTitle = styled.h1`
	text-align: center;
	font-size: 3rem;
	font-family: "Bebas Neue", sans-serif;

	a {
		font-size: 2rem;
		color: #cecece;
	}

	a:hover {
		color: #333;
	}

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
`;

export const ReleaseDesc = styled.ul`
	font-size: 1rem;
	padding-top: 1em;
	padding-left: 1em;
	font-family: "Montserrat", sans-serif;
	margin: auto 10em;

	li {
		margin-top: 1em;
	}

	a {
		background: #333;
		color: white;
	}

	a:hover {
		background: #ececec;
		color: black;
	}

	@media (max-width: 1024px) {
		margin: 0;
	}

	@media (max-width: 480px) {
		font-size: 0.75rem;
	}
`;
