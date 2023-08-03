import { useNavigate } from "react-router-dom";
import { GridCategoriesType } from "../grid-section/grid-section.data";
import "./directory-item.styles";
import {
	BackgroundImage,
	PrimaryContainer,
	SecondaryContainer,
	TitleContainer,
} from "./directory-item.styles";

type CategoryType = {
	category: GridCategoriesType;
};

const DirectoryItem: React.FC<CategoryType> = ({ category }) => {
	const { id, imageUrl, title, route } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);

	if (id > 3) {
		return (
			<PrimaryContainer onClick={onNavigateHandler}>
				<BackgroundImage imageUrl={imageUrl} />
				<TitleContainer>
					<p>{title}</p>
				</TitleContainer>
			</PrimaryContainer>
		);
	}

	return (
		<SecondaryContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<TitleContainer>
				<p>{title}</p>
			</TitleContainer>
		</SecondaryContainer>
	);
};

export default DirectoryItem;
