import React from "react";
import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";
import {
    BackgroundImage,
    DirectoryBodyContainer,
    DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <DirectoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
