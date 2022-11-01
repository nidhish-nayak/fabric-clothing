import React from "react";
import "./directory-item.styles.jsx";
import {
    BackgroundImage,
    DirectoryBodyContainer,
    DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ title, imageUrl }) => {
    return (
        <DirectoryItemContainer>
            <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
            <DirectoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
