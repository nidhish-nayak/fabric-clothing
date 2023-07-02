import { useSelector } from "react-redux";
import { selectOrderList } from "../../store/orders/orders.selector";
import { OrdersPreviewContainer, OrderTable } from "./orders-preview.styles";

const OrdersPreview = () => {
  const orderList = useSelector(selectOrderList);

  const calculateTotalPrice = (order) => {
    const totalPrice = order.reduce((accumulator, item) => accumulator + item.price, 0);
    return totalPrice;
  };

  return (
    <OrdersPreviewContainer>
      <h2>My Previous Order History:</h2>
      <OrderTable>
        <thead>
          <tr>
            <th>Orders (Quantity)</th>
            <th>Total Price</th>
            <th>Payment Type</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => (
            <tr key={index}>
              <td>
                {order.map(item => (
                  <span key={item.id}>
                    {item.name} ({item.quantity})
                    <br />
                  </span>
                ))}
              </td>
              <td>₹ {calculateTotalPrice(order)}</td>
              <td>{/* Payment Type */}</td>
              <td>{/* Payment Status */}</td>
            </tr>
          ))}
        </tbody>
      </OrderTable>
    </OrdersPreviewContainer>
  )
}

export default OrdersPreview;