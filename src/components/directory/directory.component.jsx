import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.jsx";
import {
    DirectoryContainer
} from "./directory.styles.jsx";

const categories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
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
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        route: "shop/womens",
    },
    {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        route: "shop/mens",
    },
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((i) => (
                <DirectoryItem category={i} key={i.id} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
