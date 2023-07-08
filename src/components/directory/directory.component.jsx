import React from "react";
import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import DirectoryGridItems from "../directory-grid-items/directory-grid-items.component";
import {
    ButtonContainer, DirectoryContainer,
    GridContainer, GridItems, GridTitle,
    SectionContainer, SectionDesc, SectionItem, SectionTitle,
    SectionTitleContainer
} from "./directory.styles";

// const trendingItems = [{
//     id: 1,
//     imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
//     name: "Adidas NMD",
//     price: 220
// },
// {
//     id: 2,
//     imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
//     name: "Tan Trench",
//     price: 185
// },
// {
//     id: 3,
//     imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
//     name: "Burgundy T-shirt",
//     price: 40,
// },
// {
//     id: 4,
//     imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
//     name: "Palm Tree Cap",
//     price: 14,
// }];

const gridItems = [{
    id: 1,
    imageUrl: "https://i.imgur.com/Xhwn6B9.jpg",
    name: "womens",
},
{
    id: 2,
    imageUrl: "https://i.imgur.com/G3uti66.png",
    name: "mens",
},
{
    id: 3,
    imageUrl: "https://i.imgur.com/DjRwg8f.jpg",
    name: "hats",
},
{
    id: 4,
    imageUrl: "https://i.imgur.com/bOs7PIE.jpg",
    name: "jackets",
},
{
    id: 5,
    imageUrl: "https://i.imgur.com/kz70mmZ.jpg",
    name: "shoes",
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
                    <SectionTitleContainer>
                        <SectionTitle>Unleash your style with Fabric Clothing</SectionTitle>
                        <SectionDesc>
                            Get ready to ignite your style and redefine what it means to dress with confidence.
                            Step into a world where fashion knows no boundaries with our exceptional clothing collection.
                        </SectionDesc>
                        <ButtonContainer>
                            <Button onClick={onShopHandler}>SHOP NOW</Button>
                            <Button onClick={onAuthHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>SIGN UP</Button>
                        </ButtonContainer>
                    </SectionTitleContainer>
                    <SectionItem src="https://i.imgur.com/LssQ1lH.png" />
                </SectionContainer>
                <GridContainer>
                    <GridTitle>
                        Choose by category
                    </GridTitle>
                    <GridItems>
                        {
                            gridItems.map(gridItem => <DirectoryGridItems key={gridItem.id} gridItem={gridItem} />)
                        }
                    </GridItems>
                </GridContainer>
            </DirectoryContainer>
        </Balancer>
    );
};

export default Directory;
