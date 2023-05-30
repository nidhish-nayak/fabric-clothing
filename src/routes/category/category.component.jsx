import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryContainer, CategorySection, CategoryTitle } from "./category.styles";

const Category = () => {
    // useParams - dynamic url routing
    const { category } = useParams();
    console.log('Category component rendered');
    // const categoriesMap = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('useEffect from Category component fired');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        // If products are fethced from db only then render this component
        <CategorySection>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((i) => <ProductCard key={i.id} product={i} />)}
            </CategoryContainer>
            <Footer />
        </CategorySection>
    );
};

export default Category;
