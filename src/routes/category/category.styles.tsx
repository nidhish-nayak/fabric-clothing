import styled from "styled-components";

export const CategorySection = styled.section`
	margin-top: 2em;
`;

export const CategoryContainer = styled.div`
	padding: 0 2em;
	display: grid;
	column-gap: 20px;
	row-gap: 50px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

	@media (max-width: 768px) {
		padding: 0;
		margin: 1em 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;

		button {
			width: 160px;
			height: 50px;
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		margin: 1em 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 0em;

		button {
			width: 130px;
			height: 40px;
			font-size: 0.85rem;
		}
	}

	@media (max-width: 400px) {
		button {
			width: 100px;
			font-size: 0.75rem;
		}
	}
`;

export const CategoryTitle = styled.h2`
	font-size: 30px;
	margin-bottom: 25px;
	text-decoration: underline dashed 2px #cecece;
	text-underline-offset: 0.35rem;
	text-align: center;
`;
