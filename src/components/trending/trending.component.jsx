import ProductCard from '../product-card/product-card.component.jsx';
import {
    TrendingContainer,
    TrendingItems,
    TrendingTitle
} from './trending.styles.jsx';

const Trending = ({ trendingItems }) => {
    return (
        <TrendingContainer>
            <TrendingTitle>Trending Now</TrendingTitle>
            <TrendingItems>
                {trendingItems.map(i =>
                    <ProductCard key={i.id} product={i} />
                )}
            </TrendingItems>
        </TrendingContainer>
    )
}

export default Trending;