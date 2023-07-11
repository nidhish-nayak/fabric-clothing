import DirectoryItem from "../directory-item/directory-item.component";

import {
  GridContainer,
  PrimaryGrid, SecondaryGrid
} from "./grid-section.styles";

const gridCategories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.imgur.com/DjRwg8f.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.imgur.com/bOs7PIE.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.imgur.com/b2HnocH.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.imgur.com/atYy6yP.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.imgur.com/DsMhPk5.jpg",
    route: "shop/mens",
  },
];

const GridSection = () => {
  return (
    <GridContainer>
      <h2>SHOP BY CATEGORIES</h2>
      <PrimaryGrid>
        {gridCategories
          .filter(category => category.id > 3)
          .map((i) =>
            <DirectoryItem category={i} key={i.id} />
          )}
      </PrimaryGrid>
      <SecondaryGrid>
        {gridCategories
          .filter(category => category.id <= 3)
          .map((i) => (
            <DirectoryItem category={i} key={i.id} />
          ))}
      </SecondaryGrid>
    </GridContainer>
  );
};

export default GridSection;
