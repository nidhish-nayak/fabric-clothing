import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
	background-color: #ececec;
	border-radius: 10px;
	margin-top: 12em;
	padding-top: 2em;

	@media (max-width: 768px) {
		margin-top: 6em;
	}

	@media (max-width: 480px) {
		border-radius: 0;
		margin-top: 4em;
	}
`;

export const TestimonialsTitle = styled.h1`
	margin-top: 2em;
	text-align: center;
	color: #333;
	text-transform: uppercase;
	font-family: "Montserrat", sans-serif;

	@media (max-width: 1024px) {
		font-size: 1.5rem;
		margin-top: 1em;
	}
`;

export const TestimonialsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 4em 2em 6em 2em;

	@media (max-width: 768px) {
		justify-content: center;
		padding: 1em 1em 1em 1em;
	}
`;

export const BlockFigure = styled.figure`
	font-family: "Open Sans Condensed", Arial, Helvetica, sans-serif;
	font-size: 1.5rem;
	position: relative;
	overflow: hidden;
	margin: 10px;
	min-width: 200px;
	max-width: 400px;
	width: 100%;
	color: black;
	text-align: left;
	box-shadow: none !important;

	@media (max-width: 1024px) {
		&:nth-child(1),
		&:nth-child(3) {
			display: none;
		}
	}
`;

export const BlockImage = styled.img`
	max-width: 100%;
	vertical-align: middle;
	height: 90px;
	width: 90px;
	border-radius: 50%;
	margin: 40px 0 0 10px;

	@media (max-width: 480px) {
		height: 50px;
		width: 50px;
		margin: 20px 0 0 0px;
	}
`;

export const BlockQuote = styled.blockquote`
	display: block;
	border-radius: 8px;
	position: relative;
	background-color: white;
	padding: 25px 50px 30px 50px;
	width: 100%;
	font-size: 0.8em;
	font-weight: 500;
	margin: 0;
	line-height: 1.6em;
	font-style: italic;

	@media (max-width: 480px) {
		font-size: 0.85rem;
	}
`;

export const BlockOne = styled.span`
	font-size: 3rem;
	font-weight: 700;
	top: 18px;
	left: 10px;
	padding: 0.25em;
	position: absolute;
	color: #cecece;

	@media (max-width: 480px) {
		font-size: 2rem;
		top: 10px;
		left: 15px;
	}
`;

export const BlockTwo = styled.span`
	font-size: 3rem;
	font-weight: 700;
	bottom: 2px;
	right: 30px;
	padding: 0.25em;
	position: absolute;
	color: #cecece;

	@media (max-width: 480px) {
		font-size: 2rem;
		bottom: 10px;
		right: 30px;
	}
`;

export const Author = styled.div`
	position: absolute;
	bottom: 45px;
	padding: 0 10px 0 120px;
	margin: 0;
	text-transform: uppercase;
	color: black;
	-webkit-transform: translateY(50%);
	transform: translateY(50%);
	display: flex;
	flex-direction: column;

	@media (max-width: 480px) {
		padding: 40px 10px 0 60px;
	}
`;

export const AuthorName = styled.h5`
	opacity: 0.8;
	margin: 0;
	font-weight: 800;

	@media (max-width: 480px) {
		font-size: 1rem;
	}
`;

export const AuthorWebsite = styled.span`
	font-size: 0.75rem;
	color: #333;
	text-transform: lowercase;
`;