import ProductCard from '../product-card/product-card.component';
import {
    TrendingContainer,
    TrendingItems,
    TrendingTitle
} from './trending.styles';

const trendingItems = [
    {
        id: 56,
        imageUrl: "https://i.ibb.co/Hr1CyZ5/Burbank-Shawl.webp",
        name: "Burbank Shawl",
        price: 1835
    },

    {
        id: 31,
        imageUrl: "https://i.ibb.co/VTtQWtL/Static-Nike.webp",
        name: "Static Nike",
        price: 12500,
    },
    {
        id: 35,
        imageUrl: "https://i.ibb.co/1rrrxd7/Cotton-Suit-Blazer.webp",
        name: "Cotton Suit Blazer",
        price: 3770
    },
    {
        id: 7,
        imageUrl: "https://i.ibb.co/r733R0W/Burbank-Black.webp",
        name: "Burbank Black",
        price: 499
    }
]

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
