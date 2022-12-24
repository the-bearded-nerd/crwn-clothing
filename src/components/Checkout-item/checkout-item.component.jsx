import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart, incItemCount, decItemCount } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
  const incItemQuantityHandler = () => incItemCount(cartItem);
  const decItemQuantityHandler = () => decItemCount(cartItem);

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
      <RemoveButton onClick={removeItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
