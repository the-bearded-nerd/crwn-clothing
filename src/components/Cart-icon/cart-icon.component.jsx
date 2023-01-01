import { useSelector, useDispatch } from "react-redux";

import { selectCartCount } from "../../store/cart/cart.selector";
import { toggleCartDropdown } from "../../store/cart/cart.action";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartDropdown())}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
