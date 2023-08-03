import DirectoryItem from "../directory-item/directory-item.component";
import { gridCategories } from "./grid-section.data";

import {
	GridContainer,
	PrimaryGrid,
	SecondaryGrid,
} from "./grid-section.styles";

const GridSection = () => {
	return (
		<GridContainer>
			<h2>SHOP BY CATEGORIES</h2>
			<PrimaryGrid>
				{gridCategories
					.filter((category) => category.id > 3)
					.map((i) => (
						<DirectoryItem category={i} key={i.id} />
					))}
			</PrimaryGrid>
			<SecondaryGrid>
				{gridCategories
					.filter((category) => category.id <= 3)
					.map((i) => (
						<DirectoryItem category={i} key={i.id} />
					))}
			</SecondaryGrid>
		</GridContainer>
	);
};

export default GridSection;
