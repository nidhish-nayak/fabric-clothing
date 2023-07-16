const OrderRow = ({ order, index, method, status }) => {

  const calculateTotalPrice = (order) => {
    const totalPrice = order.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    return totalPrice;
  };

  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        {order.map(item => (
          <span key={item.id}>
            {item.name} ({item.quantity})
            <br />
          </span>
        ))}
      </td>
      <td>₹ {calculateTotalPrice(order)}</td>
      <td>{method.toUpperCase()}</td>
      <td className={status === "successful" ? "successful" : "failed"}>{status.toUpperCase()}</td>
    </tr>
  );
};

export default OrderRow;