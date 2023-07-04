import { useSelector } from "react-redux";
import { selectOrderList, selectPaymentDetails } from "../../store/orders/orders.selector";
import OrderRow from "../orders-row/orders-row.component";
import { OrderTable, OrdersPreviewContainer } from "./orders-preview.styles";

const OrdersPreview = () => {
  const orderList = useSelector(selectOrderList);
  const paymentDetails = useSelector(selectPaymentDetails);

  return (
    <OrdersPreviewContainer>
      <h2>RECENT ORDERS:</h2>
      <OrderTable>
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Orders (Quantity)</th>
            <th>Total</th>
            <th>Payment Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => {
            const [method, status] = paymentDetails[index] || ['N/A', 'N/A'];
            return (
              <OrderRow
                key={index}
                order={order}
                index={index}
                method={method}
                status={status}
              />
            );
          })}
        </tbody>
      </OrderTable>
    </OrdersPreviewContainer>
  );
};

export default OrdersPreview;