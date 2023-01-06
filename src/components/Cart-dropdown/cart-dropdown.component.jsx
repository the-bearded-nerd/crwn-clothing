import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../Cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { toggleCartDropdown } from "../../store/cart/cart.slice";

import {
  DropdownButton,
  EmptyMessage,
  CartItems,
  CartDropdownContainer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckoutHandler = () => {
    dispatch(toggleCartDropdown());
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
