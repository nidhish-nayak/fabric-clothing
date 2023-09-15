import styled from "styled-components";

export const CheckoutContainer = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
	margin: 2em auto 4em;

	@media (max-width: 768px) {
		width: 90%;
		font-size: 0.9rem;
	}

	@media (max-width: 400px) {
		font-size: 0.7rem;
	}
`;
export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:nth-child(4) {
		margin-left: 12px;
		margin-right: -2px;
	}

	&:nth-child(3) {
		margin-left: 8px;
		margin-right: -8px;
	}

	&:last-child {
		width: 8%;
	}

	@media (max-width: 400px) {
		&:nth-child(3) {
			margin-left: 0px;
			margin-right: 0px;
		}

		&:nth-child(4) {
			margin-left: 2px;
			margin-right: -2px;
		}

		&:nth-child(2) {
			margin-left: -3px;
			margin-right: 3px;
		}

		&:last-child {
			width: 10%;
			margin-left: -4px;
			margin-right: 2px;
		}
	}
`;
export const Total = styled.span`
	margin-top: 30px;
	font-size: 36px;

	span {
		font-family: "Courier New";
		opacity: 0.7;
	}

	@media (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const PaymentContainer = styled.span`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	button {
		margin-left: 30px;
		margin-top: 30px;
	}

	@media (max-width: 480px) {
		display: flex;
		justify-content: space-between;

		button {
			margin-left: 10px;
			margin-top: 30px;
		}
	}
`;
