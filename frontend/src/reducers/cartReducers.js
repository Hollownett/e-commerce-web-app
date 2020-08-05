import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find(
        (prod) => prod.product === item.product
      );
      if (product) {
        return {
          ...state,
          cartItems: state.cartItems.map((prod) =>
            prod.product === product.product ? product : prod
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (prod) => prod.product !== action.payload
        ),
      };
    default:
      return state;
  }
}

export { cartReducer };
