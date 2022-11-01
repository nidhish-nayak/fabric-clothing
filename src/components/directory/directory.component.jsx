import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.jsx";
import { DirectoryContainer } from "./directory.styles.jsx";

const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {categories.map((i) => (
                <DirectoryItem
                    title={i.title}
                    imageUrl={i.imageUrl}
                    key={i.id}
                />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
