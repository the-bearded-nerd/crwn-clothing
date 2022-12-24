import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component";

import {
  ProductCardContainer,
  ProductImg,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./product-card.styles";

const ProducrCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <ProductImg src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProducrCard;
