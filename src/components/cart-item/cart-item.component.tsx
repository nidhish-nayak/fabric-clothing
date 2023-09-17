import { memo } from "react";
import { CartItemType } from "../../store/cart/cart.types";
import "./cart-item.styles";
import {
	CartItemContainer,
	ItemDetails,
	ItemImage,
	Name,
} from "./cart-item.styles";

type CartItemPropsType = {
	cartItemProps: CartItemType;
};

const CartItem: React.FC<CartItemPropsType> = memo(({ cartItemProps }) => {
	const { imageUrl, name, quantity, price } = cartItemProps;

	return (
		<CartItemContainer>
			<ItemImage src={imageUrl} alt="alternative" />
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{`${quantity} x `}
					<span>₹</span>
					{`${price}`}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
});

export default CartItem;
