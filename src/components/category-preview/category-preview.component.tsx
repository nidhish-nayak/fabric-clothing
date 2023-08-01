import { ItemsType } from "../../store/categories/categories.types";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles";
import {
	CategoryPreviewContainer,
	Preview,
	Title,
} from "./category-preview.styles";

type CategoryPreviewType = {
	title: string;
	products: ItemsType[];
};

const CategoryPreview: React.FC<CategoryPreviewType> = ({
	title,
	products,
}) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
