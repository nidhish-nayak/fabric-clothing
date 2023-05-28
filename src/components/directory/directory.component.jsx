import React from "react";
import ShoppingPage from '../../assets/shopping-page.png';
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.jsx";
import {
    DirectoryContainer,
    HeroContainer,
    HeroImage,
    HeroSlider,
    HeroTitle,
    SliderImage
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
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        route: "shop/jackets",
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
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
            <HeroContainer>
                <div>
                    <HeroTitle>Pick your style</HeroTitle>
                    <HeroSlider>
                        {categories.map(i => <SliderImage key={i.id} imageUrl={i.imageUrl} />)}
                    </HeroSlider>
                </div>
                <HeroImage src={ShoppingPage} alt="Shopping Page" />
            </HeroContainer>
            {categories.map((i) => (
                <DirectoryItem category={i} key={i.id} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
