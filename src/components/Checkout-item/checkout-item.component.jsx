import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart, incItemCount, decItemCount } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
  const incItemQuantityHandler = () => incItemCount(cartItem);
  const decItemQuantityHandler = () => decItemCount(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decItemQuantityHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incItemQuantityHandler}>
          &#10095;{" "}
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
