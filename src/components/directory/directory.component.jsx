import React from "react";
import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";
import DirectoryItem from "../directory-item/directory-item.component";

import {
    ButtonContainer, DirectoryContainer,
    GridContainer, HeroButtonOne, HeroButtonTwo,
    PrimaryGrid, SecondaryGrid,
    SectionContainer, SectionDesc, SectionItem, SectionTitle,
    SectionTitleContainer
} from "./directory.styles";

const categories = [
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

    const navigate = useNavigate()
    const onShopHandler = () => {
        navigate("/shop")
    }
    const onAuthHandler = () => {
        navigate("/auth")
    }

    return (
        <DirectoryContainer>
            <SectionContainer>
                <SectionTitleContainer>
                    <Balancer>
                        <SectionTitle>Unleash your style.</SectionTitle>
                    </Balancer>
                    <Balancer>
                        <SectionDesc>
                            Embrace the power of experimentation, unleash your creativity, and watch as your fashion transformations unfold.
                        </SectionDesc>
                    </Balancer>
                    <ButtonContainer>
                        <HeroButtonOne onClick={onShopHandler}>SHOP NOW</HeroButtonOne>
                        <HeroButtonTwo onClick={onAuthHandler}>SIGN UP</HeroButtonTwo>
                    </ButtonContainer>
                </SectionTitleContainer>
                <SectionItem src="https://i.imgur.com/sI6jufD.jpg" />
            </SectionContainer>
            <GridContainer>
                <h2>SHOP BY CATEGORIES</h2>
                <PrimaryGrid>
                    {categories
                        .filter(category => category.id > 3)
                        .map((i) =>
                            <DirectoryItem category={i} key={i.id} />
                        )}
                </PrimaryGrid>
                <SecondaryGrid>
                    {categories
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
