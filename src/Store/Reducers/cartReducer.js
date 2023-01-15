import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  SET_CART_ITEM,
} from "../Actions/cartAction";

const initialState = {
  cartData: [],
  total: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      let curr = { qty: 1, ...payload };
      let temp = state.cartData;
      temp.push(curr);
      return { ...state, cartData: temp };
    }
    case SET_CART_ITEM:
      return { ...state, cartData: payload };
    case DELETE_FROM_CART:
      return { ...state, cartData: payload };
    default:
      return state;
  }
};
