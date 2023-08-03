import ProductCard from "../product-card/product-card.component";
import { trendingItems } from "./trending.data";
import {
	TrendingContainer,
	TrendingItems,
	TrendingTitle,
} from "./trending.styles";

const Trending = () => {
	return (
		<TrendingContainer>
			<TrendingTitle>Trending Now</TrendingTitle>
			<TrendingItems>
				{trendingItems.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</TrendingItems>
		</TrendingContainer>
	);
};

export default Trending;
