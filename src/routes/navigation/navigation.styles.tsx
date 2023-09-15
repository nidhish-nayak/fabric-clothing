import { Link } from "react-router-dom";
import styled from "styled-components";

type TransparentType = {
	transparent: boolean;
};

export const NavigationContainer = styled.div<TransparentType>`
	height: 70px;
	top: 0;
	z-index: 2;
	background-color: white;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 40px;
	position: sticky;
	user-select: none;
	opacity: ${(props) => (props.transparent ? "0.9" : "1")};

	@media (min-width: 1980px) and (max-width: 3840px) {
		height: 200px;
	}

	@media (max-width: 480px) {
		padding: 0 10px;
	}
`;

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	font-size: 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media (max-width: 768px) {
		width: 100%;
		font-size: 0.85rem;
	}

	@media (max-width: 300px) {
		width: 110%;
		font-size: 0.75rem;
	}
`;

// @ts-ignore
export const NavLink = styled(Link)`
	padding: 10px 18px;
	cursor: pointer;
	border-radius: 2px;

	&:hover {
		background-color: #efefef;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 3rem;
		padding: 20px 50px;
	}

	@media (max-width: 768px) {
		padding: 10px 10px;
	}
`;
