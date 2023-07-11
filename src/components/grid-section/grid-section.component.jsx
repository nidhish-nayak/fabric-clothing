import DirectoryItem from "../directory-item/directory-item.component";

import {
  GridContainer,
  PrimaryGrid, SecondaryGrid
} from "./grid-section.styles";

const gridCategories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/TvqVc28/Escape.webp",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/h1F4yvr/Olive-Faux-Jacket.webp",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/sVCCkBZ/Jordan-Max-Aura-4.webp",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/TBxrTQh/Directory-2.webp",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/7KMFZHy/Directory-1.webp",
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
