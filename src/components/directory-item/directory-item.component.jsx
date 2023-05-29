import React from "react";
import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";
import {
    BackgroundImage,
    PrimaryBodyContainer,
    PrimaryDirectoryContainer,
    SecondaryBodyContainer,
    SecondaryDirectoryContainer
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
    const { id, imageUrl, title, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

    if (id <= 3) {
        return (
            <PrimaryDirectoryContainer onClick={onNavigateHandler}>
                <BackgroundImage imageUrl={imageUrl} />
                <PrimaryBodyContainer>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </PrimaryBodyContainer>
            </PrimaryDirectoryContainer>
        );
    }

    return (
        <SecondaryDirectoryContainer onClick={onNavigateHandler}>
            <span>{title}</span>
            <BackgroundImage imageUrl={imageUrl} />
            <SecondaryBodyContainer>
                <p>Shop Now</p>
            </SecondaryBodyContainer>
        </SecondaryDirectoryContainer>
    )
};

export default DirectoryItem;
