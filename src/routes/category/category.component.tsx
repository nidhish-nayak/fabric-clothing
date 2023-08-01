import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Footer from "../../components/footer/footer.component";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from "../../store/categories/categories.selector";

import { CategoriesMap, Items } from "../../store/categories/categories.types";
import {
	CategoryContainer,
	CategorySection,
	CategoryTitle,
} from "./category.styles";

type CategoryRouteParams = {
	category: string;
};

const Category = () => {
	// useParams - Dynamic url routing
	const { category } = useParams<
		keyof CategoryRouteParams
	>() as CategoryRouteParams;
	const categoriesMap: CategoriesMap = useSelector(selectCategoriesMap);
	const isLoading: boolean = useSelector(selectCategoriesIsLoading);
	const [products, setProducts] = useState<Items[]>();

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<CategorySection>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((i) => <ProductCard key={i.id} product={i} />)}
				</CategoryContainer>
			)}
			<Footer />
		</CategorySection>
	);
};

export default Category;
