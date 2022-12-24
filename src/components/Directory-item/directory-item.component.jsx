import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const directoryClickHandler = () => {
    navigate(`shop/${title}`);
  };
  return (
    <DirectoryItemContainer onClick={directoryClickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now </p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
