import React from "react";
import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ title, imageUrl }) => {
    return (
        <div className="directory-item-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <Link
                to={`shop/${title.toLowerCase()}`}
                className="directory-body-container"
            >
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Link>
        </div>
    );
};

export default DirectoryItem;
