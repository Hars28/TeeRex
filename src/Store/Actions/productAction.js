export const GET_PRODUCT_LOADING = "GET_PRODUCT_LOADING";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FILTER = "GET_PRODUCT_FILTER";
export const GET_PRODUCT_SEARCH = "GET_PRODUCT_SEARCH";

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((res) => res.json())
    .then((res) => dispatch({ type: GET_PRODUCT_SUCCESS, payload: res }))
    .catch((e) => {
      dispatch({ type: GET_PRODUCT_ERROR });
    });
};
export const filterProducts = (data, val) => (dispatch) => {
  let res = data.filter((e) => {
    if (val.includes(e.color)) {
      return e;
    } else if (val.includes(e.gender)) {
      return e;
    } else if (val.includes(e.type)) {
      return e;
    } else if (val.includes("250")) {
      return e.price <= 250;
    } else if (val.includes("251")) {
      return e.price >= 251 && e.price <= 450;
    } else if (val.includes("451")) {
      return e.price > 450;
    }
  });
  dispatch({ type: GET_PRODUCT_FILTER, payload: res });
};

export const searchProducts = (data,val) => (dispatch) => {
    let res = data.filter(e=>{
        if(e.name.includes(val)){
            return e
        }
    })
    dispatch({type:GET_PRODUCT_SEARCH, payload:res})
}