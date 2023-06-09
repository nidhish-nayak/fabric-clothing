import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryContainer, CategorySection, CategoryTitle } from "./category.styles";

const Category = () => {
    // useParams - Dynamic url routing
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState();

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <CategorySection>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ?
                    (<Spinner />) :
                    (
                        <CategoryContainer>
                            {products &&
                                products.map((i) => <ProductCard key={i.id} product={i} />)}
                        </CategoryContainer>
                    )
            }
            <Footer />
        </CategorySection>
    );
};

export default Category;
