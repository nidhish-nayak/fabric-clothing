import styled from "styled-components";

export const Glass = styled.div`
	@media (max-width: 480px) {
		margin: 10px;
		border-radius: 10px;
		background-image: url("https://i.ibb.co/zmVNPp5/mobile-image.webp");
		background-size: cover;
		background-position: center;
	}
`;

export const HeroSectionContainer = styled.section`
	border-radius: 10px;
	line-height: 1;
	background-color: #ececec;
	padding: 3em;
	margin-top: 1em;

	@media (min-width: 1980px) {
		padding: 8em;
	}

	@media (max-width: 768px) {
		padding: 1em;
	}

	@media (max-width: 480px) {
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 10px;
	}
`;

export const Hero = styled.div`
	max-width: 130rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	gap: 0 9.6rem;

	@media (max-width: 1300px) {
		gap: 0 6rem;
	}

	@media (max-width: 1024px) {
		gap: 0 4rem;
	}

	@media (max-width: 480px) {
		padding-bottom: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const HeroTextBox = styled.div`
	margin: 0;
	padding: 0;

	@media (max-width: 480px) {
		padding: 40px 0 10px 0;
	}
`;

export const HeroTitle = styled.h1`
	margin: 0;
	font-size: 5.2rem;
	font-family: "Bebas Neue", sans-serif;
	color: black;
	font-weight: 700;
	letter-spacing: -0.5px;
	line-height: 1.05;

	@media (min-width: 1980px) {
		font-size: 7rem;
	}

	@media (max-width: 1500px) {
		font-size: 4rem;
	}

	@media (max-width: 1200px) {
		font-size: 3.5rem;
	}

	@media (max-width: 1024px) {
		font-size: 2.5rem;
	}

	@media (max-width: 768px) {
		font-size: 2rem;
	}

	@media (max-width: 480px) {
		font-size: 2.5rem;
	}
`;

export const HeroDescription = styled.p`
	font-size: 1.5rem;
	color: #333;
	font-family: "Montserrat", sans-serif;
	letter-spacing: -1px;
	line-height: 1.5;
	margin-bottom: 4.8rem;

	@media (min-width: 1980px) {
		font-size: 2rem;
	}

	@media (max-width: 1500px) {
		font-size: 1.25rem;
	}

	@media (max-width: 1024px) {
		font-size: 1rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		font-size: 0.75rem;
		font-weight: bold;
		color: #333;
		margin-bottom: 1.5rem;
		letter-spacing: -0.5px;
	}
`;

export const HeroButtonLeft = styled.button`
	border: none;
	font-family: "Open Sans Condensed";
	padding: 1em 2em;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	background: #333;
	margin-right: 2em;
	cursor: pointer;
	border-radius: 10px;

	@media (min-width: 1980px) {
		font-size: 1.5rem;
	}

	@media (max-width: 1024px) {
		font-size: 0.55rem;
	}

	@media (max-width: 768px) {
		font-size: 0.45rem;
	}

	@media (max-width: 480px) {
		font-size: 0.65rem;
		border-radius: 5px;
	}

	&:hover {
		background: black;
	}
`;

export const HeroButtonRight = styled.button`
	border: none;
	font-family: "Open Sans Condensed";
	padding: 1em 2em;
	color: black;
	font-size: 1rem;
	font-weight: bold;
	background: #f7c547;
	cursor: pointer;
	border-radius: 10px;

	&:hover {
		background: black;
		color: white;
	}

	span {
		margin-left: 0.25em;
	}

	@media (min-width: 1700px) {
		font-size: 1.5rem;
	}

	@media (max-width: 1024px) {
		font-size: 0.55rem;
	}

	@media (max-width: 768px) {
		font-size: 0.45rem;

		span {
			margin-left: 0.5em;
		}
	}

	@media (max-width: 480px) {
		font-size: 0.65rem;
		border-radius: 5px;
	}
`;

export const HeroImageContainer = styled.div`
	grid-column: 2 / 3;
	grid-row: 1 / 3;

	@media (max-width: 480px) {
		display: none;
	}
`;

export const HeroImage = styled.img`
	width: 100%;
`;

export const DeliveredClothes = styled.div`
	margin-top: 2em;
	display: flex;
	align-items: center;
	gap: 3.2rem;

	@media (max-width: 1024px) {
		gap: 2rem;
		margin-top: 1em;
	}

	@media (max-width: 768px) {
		gap: 1rem;
		margin-top: 1em;
	}

	@media (max-width: 480px) {
		width: 150px;
	}
`;

export const DeliveredImages = styled.div`
	img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		margin-right: -0.5rem;
		outline: white solid 3px;
	}

	@media (min-width: 1700px) {
		img {
			width: 3rem;
			height: 3rem;
		}
	}

	@media (max-width: 1024px) {
		img {
			width: 1rem;
			height: 1rem;
			margin-right: -0.25rem;
		}
	}

	@media (max-width: 768px) {
		img {
			width: 0.65rem;
			height: 0.65rem;
			margin-right: -0.05rem;
		}
	}

	@media (max-width: 480px) {
		img {
			width: 1rem;
			height: 1rem;
			margin-right: -0.05rem;
			outline: white solid 1px;
		}
	}

	@media (max-width: 340px) {
		img {
			width: 0.8rem;
			height: 0.8rem;
			margin-right: -0.15rem;
		}
	}
`;

export const DeliveredText = styled.p`
	color: #333;
	font-size: 1rem;
	font-family: "Montserrat", sans-serif;
	font-weight: 600;

	span {
		color: #cf711f;
	}

	@media (min-width: 1980px) {
		font-size: 1.5rem;
	}

	@media (max-width: 1024px) {
		font-size: 0.55rem;
	}

	@media (max-width: 768px) {
		font-size: 0.45rem;
	}

	@media (max-width: 480px) {
		font-size: 0.55rem;
		font-weight: bold;
		line-height: 12px;
	}
`;
