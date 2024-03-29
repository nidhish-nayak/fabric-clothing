import { useSelector } from "react-redux";
import {
	selectOrderList,
	selectPaymentDetails,
} from "../../store/orders/orders.selector";
import {
	OrdersType,
	PaymentDetailsType,
} from "../../store/orders/orders.types";
import OrderRow from "../orders-row/orders-row.component";
import {
	Note,
	OrderTable,
	OrdersPreviewContainer,
} from "./orders-preview.styles";

const OrdersPreview = () => {
	const orderList: OrdersType[] = useSelector(selectOrderList);
	const paymentDetails: PaymentDetailsType[] =
		useSelector(selectPaymentDetails);

	return (
		<OrdersPreviewContainer>
			<Note>
				<b>Test Card: </b>4111 1111 1111 1111 (any expiry and cv)
				<br />
				<b>Test UPI: </b>&lt;phone.no&gt;@ybl
				<br />
				<b>Note: </b>Payment method is in Test mode and no amount will be
				deducted from the user.
			</Note>
			<h2>RECENT ORDERS</h2>
			<div>
				<OrderTable>
					<thead>
						<tr>
							<th>Order No.</th>
							<th>OrdersType (Quantity)</th>
							<th>Total</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{orderList.map((order: OrdersType, index: number) => {
							const paymentDetail: PaymentDetailsType = paymentDetails[
								index
							] || {
								status: "N/A",
							};
							return (
								<OrderRow
									key={index}
									order={order}
									index={index}
									status={paymentDetail.status}
								/>
							);
						})}
					</tbody>
				</OrderTable>
			</div>
		</OrdersPreviewContainer>
	);
};

export default OrdersPreview;
