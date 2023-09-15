import styled from "styled-components";

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	margin: 1em;

	h2 {
		margin: 10px 0;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		margin: 3em;
		width: 680px;
		font-size: 3rem;

		h2 {
			font-size: 5rem;
		}
	}

	@media (max-width: 1024px) {
		margin-bottom: 4em;
		width: 320px;
	}

	@media (max-width: 400px) {
		width: 200px;
	}
`;
