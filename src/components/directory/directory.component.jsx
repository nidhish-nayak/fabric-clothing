import React from "react";
import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
    ButtonContainer, DirectoryContainer, GridContainer, SectionContainer,
    SectionDesc, SectionItem, SectionTitle, TitleContainer
} from "./directory.styles";

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

    const navigate = useNavigate()
    const onShopHandler = () => {
        navigate("/shop")
    }
    const onAuthHandler = () => {
        navigate("/auth")
    }

    return (
        <Balancer>
            <DirectoryContainer>
                <SectionContainer>
                    <TitleContainer>
                        <SectionTitle>Unleash your style with Fabric Clothing</SectionTitle>
                        <SectionDesc>
                            Get ready to ignite your style and redefine what it means to dress with confidence.
                            Step into a world where fashion knows no boundaries with our exceptional clothing collection.
                        </SectionDesc>
                        <ButtonContainer>
                            <Button onClick={onShopHandler}>SHOP NOW</Button>
                            <Button onClick={onAuthHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>SIGN UP</Button>
                        </ButtonContainer>
                    </TitleContainer>
                    <SectionItem src="https://i.imgur.com/LssQ1lH.png" />
                </SectionContainer>
                <GridContainer>
                    {trendingItems.map(i => <img key={i.id} src={i.imageUrl} alt="alt" />)}
                </GridContainer>
            </DirectoryContainer>
        </Balancer>
    );
};

export default Directory;
