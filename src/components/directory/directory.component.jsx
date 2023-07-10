import React from "react";

import { FaFingerprint } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import DirectoryItem from "../directory-item/directory-item.component";
import {
    DeliveredClothes, DeliveredImages, DeliveredText,
    DirectoryContainer, GridContainer, Hero, HeroButtonLeft, HeroButtonRight, HeroDescription,
    HeroImage, HeroImageContainer, HeroTextBox, HeroTitle,
    PrimaryGrid, SecondaryGrid, SectionContainer,
} from "./directory.styles";

const gridCategories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.imgur.com/DjRwg8f.jpg",
        route: "shop/hats",
    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.imgur.com/bOs7PIE.jpg",
        route: "shop/jackets",
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.imgur.com/b2HnocH.jpg",
        route: "shop/sneakers",
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.imgur.com/atYy6yP.jpg",
        route: "shop/womens",
    },
    {
        id: 5,
        title: "mens",
        imageUrl: "https://i.imgur.com/DsMhPk5.jpg",
        route: "shop/mens",
    },
];

const Directory = () => {
    const navigate = useNavigate();
    const handleShopNow = () => {
        navigate("/shop")
    }
    const handleSignUp = () => {
        navigate("/auth")
    }

    return (
        <DirectoryContainer>
            <SectionContainer class="section-hero">
                <Hero class="hero">
                    <HeroTextBox class="hero-text-box">
                        <HeroTitle>
                            Unleash your style with fabric clothing
                        </HeroTitle>
                        <HeroDescription class="hero-description">
                            We enable you to effortlessly purchase clothes online, tailored to your style and preferences.
                        </HeroDescription>
                        <HeroButtonLeft onClick={handleShopNow}>
                            SHOP NOW
                        </HeroButtonLeft>
                        <HeroButtonRight onClick={handleSignUp}>
                            SIGN UP <span><FaFingerprint /></span>
                        </HeroButtonRight>
                    </HeroTextBox>
                    <HeroImageContainer class="hero-img-box">
                        <HeroImage
                            src="https://i.imgur.com/pIJMpHe.jpg"
                            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                            class="hero-img"
                        />
                    </HeroImageContainer>
                    <DeliveredClothes class="delivered-meals">
                        <DeliveredImages class="delivered-imgs">
                            <img src="https://i.imgur.com/7SOUkTO.jpg" alt="Customerphoto" />
                            <img src="https://i.imgur.com/IIbYLLl.jpg" alt="Customerphoto" />
                            <img src="https://i.imgur.com/FKLmz70.jpg" alt="Customerphoto" />
                            <img src="https://i.imgur.com/8fZnitm.jpg" alt="Customerphoto" />
                            <img src="https://i.imgur.com/920vVhD.jpg" alt="Customerphoto" />
                            <img src="https://i.imgur.com/ZDXaBGO.jpg" alt="Customerphoto" />
                        </DeliveredImages>
                        <DeliveredText class="delivered-text">
                            <span>250,000+</span> clothes delivered last year!
                        </DeliveredText>
                    </DeliveredClothes>
                </Hero>
            </SectionContainer>
            <GridContainer>
                <h2>SHOP BY CATEGORIES</h2>
                <PrimaryGrid>
                    {gridCategories
                        .filter(category => category.id > 3)
                        .map((i) =>
                            <DirectoryItem category={i} key={i.id} />
                        )}
                </PrimaryGrid>
                <SecondaryGrid>
                    {gridCategories
                        .filter(category => category.id <= 3)
                        .map((i) => (
                            <DirectoryItem category={i} key={i.id} />
                        ))}
                </SecondaryGrid>
            </GridContainer>
        </DirectoryContainer>
    );
};

export default Directory;
