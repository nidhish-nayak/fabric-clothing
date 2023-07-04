import React from "react";

import DirectoryItem from "../directory-item/directory-item.component";
import ReviewsCard from "../reviews-card/reviews-card.component";
import Trending from "../trending/trending.component";

import "./directory.styles.jsx";
import {
    DirectoryContainer, PrimaryContainer,
    SecondaryBody,
    SecondaryContainer, SecondaryTitle
} from "./directory.styles.jsx";

const categories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.imgur.com/MXdmoE5.jpg",
        route: "shop/hats",
    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.imgur.com/lUp9ut0.png",
        route: "shop/jackets",
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.imgur.com/1ZaMDbi.jpg",
        route: "shop/sneakers",
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.imgur.com/srohIpc.jpg",
        route: "shop/womens",
    },
    {
        id: 5,
        title: "mens",
        imageUrl: "https://i.imgur.com/Mz9cewV.jpg",
        route: "shop/mens",
    },
];

const trendingItems = [{
    id: 1,
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    name: "Adidas NMD",
    price: 220
},
{
    id: 2,
    imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
    name: "Tan Trench",
    price: 185
},
{
    id: 3,
    imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
    name: "Burgundy T-shirt",
    price: 40,
},
{
    id: 4,
    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    name: "Palm Tree Cap",
    price: 14,
}];

const Directory = () => {
    return (
        <DirectoryContainer>
            <PrimaryContainer>
                {categories
                    .filter(category => category.id <= 3)
                    .map((i) => (
                        <DirectoryItem category={i} key={i.id} />
                    ))}
            </PrimaryContainer>
            <SecondaryContainer>
                <SecondaryTitle>Shop by category</SecondaryTitle>
                <SecondaryBody>
                    {categories
                        .filter(category => category.id > 3)
                        .map((i) =>
                            <DirectoryItem category={i} key={i.id} />
                        )}
                </SecondaryBody>
            </SecondaryContainer>
            <ReviewsCard />
            <Trending trendingItems={trendingItems} />
        </DirectoryContainer>
    );
};

export default Directory;
