import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
	margin-bottom: 2em;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 1980px) and (max-width: 3840px) {
		margin: 4em 2em 10em 2em;
	}

	@media (max-width: 768px) {
		align-items: space-around;

		h2 {
            text-align: center;
			position: relative;
            text-decoration: underline dashed 2px #cecece;
            text-underline-offset: 0.35rem;
	    }
`;

// @ts-ignore
export const Title = styled(Link)`
	font-size: 28px;
	margin-left: 35px;
	margin-bottom: 25px;
	padding: 0.25em;
	border-radius: 0.1em;
	cursor: pointer;
	&:hover {
		background-color: lightgrey;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 5rem;
	}

	@media (max-width: 768px) {
		margin: 0;
		text-align: center;
		border-radius: 0;
	}
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	column-gap: 20px;

	@media (min-width: 1980px) and (max-width: 3840px) {
		grid-template-columns: repeat(4, minmax(600px, 1fr));
	}

	@media (max-width: 768px) {
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
