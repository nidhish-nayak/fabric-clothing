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
            <BackgroundImage imageUrl={imageUrl} />
            <DirectoryBodyContainer to={"/shop/" + title}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
