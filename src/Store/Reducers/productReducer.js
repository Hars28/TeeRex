import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_FILTER,
  GET_PRODUCT_SEARCH,
} from "../Actions/productAction";
const initialState = {
  productData: [],
  filterData: [],
  loading: false,
  error: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING:
      return { ...state, loading: true };
    case GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: true };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productData: payload,
        filterData: payload,
        error: false,
        loading: false,
      };
    case GET_PRODUCT_FILTER: {
      return {
        ...state,
        filterData: payload,
      };
    }
    case GET_PRODUCT_SEARCH:{
        return {
            ...state,
            filterData:payload
        }
    }
    default:
      return state;
  }
};
