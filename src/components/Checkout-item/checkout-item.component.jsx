import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  ClearButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemFromCartHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const incItemQuantityHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const decItemQuantityHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
