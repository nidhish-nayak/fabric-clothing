import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import Footer from "../footer/footer.component";
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
        imageUrl: "https://source.unsplash.com/KYKnR-pfURc",
        route: "shop/hats",
    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://source.unsplash.com/ua9ReZlzcIE",
        route: "shop/jackets",
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://source.unsplash.com/aDZ5YIuedQg",
        route: "shop/sneakers",
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://source.unsplash.com/cED8oFhEeNc",
        route: "shop/womens",
    },
    {
        id: 5,
        title: "mens",
        imageUrl: "https://source.unsplash.com/Jg7UTkxTruQ",
        route: "shop/mens",
    },
];

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
            <Trending />
            <Footer />
        </DirectoryContainer>
    );
};

export default Directory;
