import styled from "styled-components";

export const ProductCardContainer = styled.div`
	width: 75%;
	margin: 2em auto;
	display: flex;
	flex-direction: column;
	height: 350px;
	justify-content: center;
	align-items: center;
	position: relative;

	img {
		width: 100%;
		height: 95%;
		object-fit: cover;
		margin-bottom: 5px;
		border-radius: 10px;
	}

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		img {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}

	@media (max-width: 480px) {
		height: 260px;
		width: 80%;

		button {
			width: 150px;
			opacity: 0.7;
			position: absolute;
			top: 180px;
			display: none;
		}
	}

	@media (max-width: 400px) {
		height: 230px;
		width: 80%;

		button {
			width: 120px;
			opacity: 0.7;
			position: absolute;
			top: 150px;
			display: none;
		}
	}

	@media (max-width: 320px) {
		height: 200px;
		width: 80%;

		button {
			width: 110px;
			opacity: 0.7;
			position: absolute;
			top: 130px;
			display: none;
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	margin-top: 5px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	margin-bottom: 15px;

	@media (max-width: 480px) {
		font-size: 1rem;
		margin-right: 10px;
	}
`;

export const Price = styled.span`
	span {
		font-family: "Courier New";
		opacity: 0.5;
	}

	@media (max-width: 480px) {
		font-size: 1rem;
	}
`;
