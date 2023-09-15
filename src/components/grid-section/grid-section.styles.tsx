import styled from "styled-components";

export const GridContainer = styled.section`
	margin: 4em 0 0 0;
	padding: 10em 30em;

	h2 {
		margin-bottom: 1em;
		text-align: center;
		font-size: 4rem;
		color: #333;
		letter-spacing: -1.75px;
		font-family: "Montserrat", sans-serif;
	}

	@media (max-width: 3840px) {
		h2 {
			font-size: 6rem;
		}
	}

	@media (max-width: 2560px) {
		h2 {
			font-size: 4rem;
		}
	}

	@media (max-width: 1980px) {
		margin: 8em 0 0 0;
		padding: 0 5em;
		h2 {
			font-size: 2rem;
		}
	}

	@media (max-width: 1366px) {
		padding: 0 5em;
	}

	@media (max-width: 1024px) {
		padding: 0 1em;
		margin: 6em 0 0 0;

		h2 {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		margin: 6em 0 0 0;

		h2 {
			margin-bottom: 1em;
		}
	}

	@media (max-width: 480px) {
		margin: 4em 0 0 0;

		h2 {
			margin-bottom: 1.5em;
		}
	}

	@media (max-width: 340px) {
		margin: 4em 0 0 0;

		h2 {
			font-size: 1.25rem;
			margin-bottom: 1.5em;
		}
	}
`;

export const PrimaryGrid = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
`;

export const SecondaryGrid = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

		@media (max-width: 480px) {
			
		}
  }

`;
