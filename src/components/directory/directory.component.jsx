import React from "react";
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
    console.log('directory Comp rendered');
    return (
        <div className='categories-container'>
            {
                categories.map(i => (
                    <CategoryItem title={i.title} imageUrl={i.imageUrl} key={i.id} />
                ))
            }
        </div>
    )
}

export default Directory;