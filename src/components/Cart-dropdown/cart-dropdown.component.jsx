import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "../Cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";

import {
  DropdownButton,
  EmptyMessage,
  CartItems,
  CartDropdownContainer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, toggleIsCartOpen } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    toggleIsCartOpen();
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <DropdownButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </DropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
