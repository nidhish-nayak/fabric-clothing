import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((i) => (
                <DirectoryItem
                    title={i.title}
                    imageUrl={i.imageUrl}
                    key={i.id}
                />
            ))}
        </div>
    );
};

export default Directory;
