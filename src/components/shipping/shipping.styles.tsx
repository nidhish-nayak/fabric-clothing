import styled from "styled-components";

export const ShippingContainer = styled.div`
	background-color: #f6f5f4;
	padding: 1.5em 1em 4em 1em;
	border-radius: 10px;
	position: relative;

	@media (min-width: 1980px) and (max-width: 3840px) {
		margin-bottom: 4em;
		padding: 2em 4em 12em 4em;
	}
`;

export const CircuitImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	max-width: 100px;
	opacity: 0.1;
	overflow: hidden;

	@media (min-width: 1980px) and (max-width: 3840px) {
		max-width: 400px;
	}
`;

export const Title = styled.h1`
	text-align: center;
	margin: 1.5em;
	font-family: "Montserrat", sans-serif;
	color: #333;

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 5rem;
	}

	@media (max-width: 1024px) {
		font-size: 1.5rem;
		margin: 2em;
	}
`;

export const FeaturesSection = styled.section`
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;

	@media (min-width: 1980px) and (max-width: 3840px) {
		gap: 6rem;
		max-width: 140em;
	}

	@media (max-width: 1028px) {
		gap: 2rem;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 100px auto;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media (max-width: 1028px) {
		grid-template-columns: 60px auto;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		grid-template-columns: 80px auto;
		gap: 1rem;
	}

	@media (max-width: 480px) {
		grid-template-columns: 40px auto;
		gap: 2rem;
	}
`;

export const Icon = styled.div`
	color: #333;
	justify-self: center;
	align-self: center;
	font-size: 3.5rem;

	img {
		width: 1em;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 8rem;
	}

	@media (max-width: 1028px) {
		font-size: 2.5rem;
	}

	@media (max-width: 768px) {
		font-size: 3rem;
	}

	@media (max-width: 480px) {
		margin-top: 5px;
		align-self: flex-start;
		font-size: 2.5rem;
	}
`;

export const Description = styled.div`
	h2 {
		@media (min-width: 1980px) and (max-width: 3840px) {
			font-size: 4rem;
		}

		@media (max-width: 480px) {
			margin: 0;
			margin-bottom: 5px;
		}
	}

	p {
		@media (min-width: 1980px) and (max-width: 3840px) {
			font-size: 3rem;
		}

		@media (max-width: 480px) {
			margin: 0;
		}
	}
`;
