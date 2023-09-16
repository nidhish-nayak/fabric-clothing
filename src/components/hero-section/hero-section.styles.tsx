import styled from "styled-components";

export const HeroSectionContainer = styled.section`
	border-radius: 10px;
	line-height: 1;
	background-color: #f6f5f4;
	padding: 3em;
	margin-top: 0.25em;
	position: relative;

	@media (min-width: 1980px) {
		padding: 8em;
	}

	@media (max-width: 768px) {
		padding: 1em;
	}

	@media (max-width: 480px) {
		background: #f6f5f4;
		margin-top: 0em;
		border-radius: 0px;
	}
`;

export const HeroCircuit = styled.img`
	display: none;
	position: absolute;
	width: 100px;
	overflow: hidden;

	@media (max-width: 600px) {
		display: block;
		bottom: 20px;
		right: 0;
		opacity: 0.2;
	}

	@media (max-width: 400px) {
		width: 75px;
		display: block;
		bottom: 50px;
		right: 0;
		opacity: 0.2;
	}
`;

export const Hero = styled.div`
	max-width: 130rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	gap: 0 9.6rem;

	@media (min-width: 3840px) {
		margin: 0 auto;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		margin: 0 auto;
		max-width: 150em;
	}

	@media (max-width: 1300px) {
		gap: 0 6rem;
	}

	@media (max-width: 1024px) {
		gap: 0 4rem;
	}

	@media (max-width: 600px) {
		padding-bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const HeroTextBox = styled.div`
	margin: 0;
	padding: 0;

	@media (min-width: 2700px) and (max-width: 3840px) {
		h1 {
			font-size: 10rem;
		}

		p {
			font-size: 3rem;
		}

		button {
			font-size: 2rem;
		}
	}

	@media (min-width: 1980px) and (max-width: 2700px) {
		h1 {
			font-size: 8rem;
		}

		p {
			font-size: 2.5rem;
		}

		button {
			font-size: 1.5rem;
		}
	}

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
		font-size: 4.5rem;
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

	@media (max-width: 600px) {
		font-size: 3.25rem;
	}

	@media (max-width: 480px) {
		font-size: 3.15rem;
	}

	@media (max-width: 380px) {
		font-size: 2.5rem;
	}

	@media (max-width: 300px) {
		font-size: 2.25rem;
	}
`;

export const HeroDescription = styled.p`
	font-size: 1.5rem;
	color: #333;
	font-family: "Montserrat", sans-serif;
	letter-spacing: -1px;
	line-height: 1.5;
	margin-bottom: 3em;

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
		color: #333;
		margin-bottom: 1.5rem;
		letter-spacing: -0.5px;
	}

	@media (max-width: 600px) {
		font-size: 0.9rem;
	}

	@media (max-width: 480px) {
		font-size: 1rem;
		color: #333;
		margin-bottom: 2em;
		letter-spacing: -0.5px;
	}

	@media (max-width: 380px) {
		font-size: 0.85rem;
		color: #333;
		margin-bottom: 2em;
		letter-spacing: -0.5px;
	}

	@media (max-width: 300px) {
		font-size: 0.75rem;
	}
`;

export const HeroButtonLeft = styled.button`
	border: none;
	font-family: "Open Sans Condensed";
	padding: 1em 2em;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	background: #191919;
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

	@media (max-width: 600px) {
		font-size: 0.7rem;
		border-radius: 0px;
		box-shadow: 0 0 0 0, 4px 4px 0 0 #ccc;
	}

	@media (max-width: 480px) {
		font-size: 0.7rem;
		border-radius: 0px;
		box-shadow: 0 0 0 0, 4px 4px 0 0 #ccc;
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

	@media (max-width: 600px) {
		font-size: 0.7rem;
		border-radius: 0px;
		box-shadow: 0 0 0 0, 4px 4px 0 0 #ccc;
	}

	@media (max-width: 480px) {
		font-size: 0.7rem;
		border-radius: 0px;
		box-shadow: 0 0 0 0, 4px 4px 0 0 #ccc;
	}
`;

export const HeroImageContainer = styled.div`
	grid-column: 2 / 3;
	grid-row: 1 / 3;

	@media (min-width: 1980px) and (max-width: 3840px) {
		img {
			max-width: 1000px;
		}
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

export const DeliveredClothes = styled.div`
	margin-top: 2em;
	display: flex;
	align-items: center;
	gap: 3.2em;

	@media (min-width: 2700px) and (max-width: 3840px) {
		div {
			img {
				width: 4em;
				height: 4em;
			}
		}
		p {
			font-size: 2rem;
		}
	}

	@media (min-width: 1980px) and (max-width: 2700px) {
		div {
			img {
				width: 3em;
				height: 3em;
			}
		}
		p {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 1024px) {
		gap: 2em;
		margin-top: 1em;
	}

	@media (max-width: 768px) {
		gap: 1em;
		margin-top: 1em;
	}

	@media (max-width: 600px) {
		gap: 1em;
		margin-top: 2em;
	}

	@media (max-width: 480px) {
		gap: 1em;
		margin-top: 1em;
	}
`;

export const DeliveredImages = styled.div`
	img {
		width: 2em;
		height: 2em;
		border-radius: 50%;
		margin-right: -0.5em;
		outline: white solid 3px;
	}

	@media (min-width: 1700px) {
		img {
			width: 3em;
			height: 3em;
		}
	}

	@media (max-width: 1024px) {
		img {
			width: 1em;
			height: 1em;
			margin-right: -0.25em;
		}
	}

	@media (max-width: 768px) {
		img {
			width: 0.65em;
			height: 0.65em;
			margin-right: -0.05em;
		}
	}

	@media (max-width: 600px) {
		img {
			width: 1.25em;
			height: 1.25em;
			margin-right: -0.2em;
			outline: white solid 1px;
		}
	}

	@media (max-width: 480px) {
		img {
			width: 1.15em;
			height: 1.15em;
			margin-right: -0.2em;
			outline: white solid 1px;
		}
	}

	@media (max-width: 340px) {
		img {
			margin-right: -0.25em;
		}
	}
`;

export const DeliveredText = styled.p`
	color: #191919;
	font-size: 1rem;
	font-family: "Montserrat", sans-serif;
	font-weight: 600;

	span {
		color: darkred;
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

	@media (max-width: 600px) {
		font-size: 0.7rem;
	}

	@media (max-width: 480px) {
		font-size: 0.65rem;
		font-weight: bold;
		line-height: 12px;
	}

	@media (max-width: 340px) {
		font-size: 0.55rem;
	}
`;
