import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CartItemType } from "../../store/cart/cart.types";
import "./product-card.styles";
import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from "./product-card.styles";

type ProductCardType = {
	product: CartItemType;
};

const ProductCard: React.FC<ProductCardType> = ({ product }) => {
	const dispatch = useDispatch();
	const { name, price, imageUrl } = product;
	const addProductToCart = () => dispatch(addItemToCart(product));

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} loading="lazy" decoding="async" />
			<Footer>
				<Name>{name}</Name>
				<Price>
					<span>₹</span>
					{`${price}`}
				</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to Cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
