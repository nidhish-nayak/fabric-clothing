import { DirectoryGridItem, GridImage } from "./directory-grid-items.styles";

const DirectoryGridItems = ({ gridItem }) => {
  const { imageUrl, name } = gridItem;

  return (
    <DirectoryGridItem>
      <GridImage src={imageUrl} alt={name} />
    </DirectoryGridItem>
  )
}

export default DirectoryGridItems;