import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  ClearButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemFromCartHandler = () => clearItemFromCart(cartItem);
  const incItemQuantityHandler = () => addItemToCart(cartItem);
  const decItemQuantityHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span>{name}</span>
      <Quantity>
        <div onClick={decItemQuantityHandler}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={incItemQuantityHandler}>&#10095; </div>
      </Quantity>
      <span>{price}</span>
      <ClearButton onClick={clearItemFromCartHandler}>&#10005;</ClearButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
