import styled from "styled-components";

type ImageUrlType = {
	imageUrl: string;
};

export const BackgroundImage = styled.div<ImageUrlType>`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: top;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	opacity: 1;
	position: absolute;

	p {
		font-family: "Montserrat", sans-serif;
		font-weight: 500;
		font-size: 1.25rem;
		color: white;
		text-transform: uppercase;
		margin: 0;
		padding: 1em;
	}

	&:hover {
		opacity: 1;
	}

	@media (max-width: 3840px) {
		p {
			font-size: 4rem;
		}
	}

	@media (max-width: 3000px) {
		p {
			font-size: 3rem;
		}
	}

	@media (max-width: 2560px) {
		p {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		p {
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		p {
			font-size: 0.8rem;
		}
	}
`;

export const PrimaryContainer = styled.div`
	height: 700px;
	margin: 2em 2px 2px 2px;
	border-radius: 2px;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	@media (max-width: 3840px) {
		height: 1000px;
	}

	@media (max-width: 3000px) {
		height: 900px;
	}

	@media (max-width: 2560px) {
		height: 600px;
	}

	@media (max-width: 1980px) {
		height: 500px;
	}

	@media (max-width: 1500px) {
		height: 400px;
	}

	@media (max-width: 1024px) {
		height: 300px;
	}

	@media (max-width: 768px) {
		height: 200px;
	}

	@media (max-width: 480px) {
		height: 150px;
		margin: 1px;
		border-radius: 0;
	}

	${BackgroundImage} {
		filter: brightness(50%);
		background-size: 100%;
		background-position: top;
	}

	&:hover {
		cursor: pointer;
		${BackgroundImage} {
			transform: scale(1.1);
			filter: brightness(100%);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		${TitleContainer} {
			opacity: 1;
			display: none;
		}
	}
`;

export const SecondaryContainer = styled.div`
	width: 100%;
	margin: 2px;
	border-radius: 2px;
	height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;

	@media (max-width: 3840px) {
		height: 1000px;
	}

	@media (max-width: 3000px) {
		height: 900px;
	}

	@media (max-width: 2560px) {
		height: 600px;
	}

	@media (max-width: 1980px) {
		height: 500px;
	}

	@media (max-width: 1500px) {
		height: 400px;
	}

	@media (max-width: 1024px) {
		height: 300px;
	}

	@media (max-width: 768px) {
		height: 200px;
	}

	@media (max-width: 480px) {
		height: 150px;
		margin: 1px;
		border-radius: 0;
	}

	${BackgroundImage} {
		filter: brightness(50%);
		background-position: center;
	}

	&:hover {
		cursor: pointer;
		${BackgroundImage} {
			transform: scale(1.1);
			filter: brightness(100%);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		${TitleContainer} {
			opacity: 1;
			display: none;
		}
	}
`;
