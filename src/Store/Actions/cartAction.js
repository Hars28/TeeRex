export const  ADD_TO_CART="ADD_TO_CART";
export const DELETE_FROM_CART="DELETE_FROM_CART";

export const  SET_CART_ITEM="INCREASE_CART_ITEM";
export const GET_TOTAL_PRICE="GET_TOTAL_PRICE";

export const addItemToCart = (payload)=>(dispatch)=>{
    dispatch({type:ADD_TO_CART,payload})
}
export const increaseCartItem = (cart,val,id) =>(dispatch)=>{
    let newCart = cart.filter((e)=>e.id==id?e.qty=val:e)

    dispatch({type:SET_CART_ITEM,payload:newCart})
}
export const removeFromCart = (cart,id)=>(dispatch)=>{
    let newCart = cart.filter((e)=>e.id!==id)
    dispatch({type:DELETE_FROM_CART,payload:newCart})
}