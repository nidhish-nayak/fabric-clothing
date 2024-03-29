import styled from "styled-components";

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 15px;
`;
export const ItemDetails = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;

	span {
		span {
			font-family: "Courier New";
			opacity: 0.7;
		}
	}
`;

export const Name = styled.span`
	font-size: 16px;
	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 3rem;
	}
`;

export const ItemImage = styled.img`
	width: 4em;
	object-fit: cover;
`;
