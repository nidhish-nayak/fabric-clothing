import { useNavigate } from "react-router-dom";
import "./directory-item.styles";
import {
  BackgroundImage,
  PrimaryContainer, SecondaryContainer, TitleContainer
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
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
  )
};

export default DirectoryItem;