import styled from "styled-components";

export const TrendingContainer = styled.section`
	margin: 10em 0 10em 0;

	@media (max-width: 768px) {
		margin: 6em 0 0 0;
	}

	@media (max-width: 480px) {
		margin: 4em 0 0 0;
	}
`;

export const TrendingTitle = styled.h2`
	font-weight: 700;
	font-size: 2rem;
	font-family: "Montserrat", sans-serif;
	text-align: center;
	text-transform: uppercase;

	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}
`;

export const TrendingItems = styled.div`
	margin: 4em 0em;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 1em;

	@media (max-width: 1024px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 2em 0;
	}

	@media (max-width: 500px) {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media (max-width: 480px) {
		margin: 1em 0;
	}
`;
