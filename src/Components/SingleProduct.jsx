import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../Store/Actions/cartAction';
import Styles from "./singleproduct.module.css"
const SingleProduct = ({item}) => {
    const dispatch = useDispatch();

    const {cartData} = useSelector(store=>store.cartReducer)
  return (
    <div id={Styles.product_main}>
        <p id={Styles.product_name}>{item.name}</p>
        <img src={item.imageURL} alt="product-image"/>
        <div id={Styles.details}>
            <p>₹ {item.price}</p>
            <button onClick={()=>{
                let isPresent = cartData.findIndex((e)=>e.id==item.id)
                if(isPresent!==-1){
                    alert("Item already in cart")
                    return
                }
                else{
                    dispatch(addItemToCart(item))
                    alert("Item added to cart")
                }
            }}>Add To Cart</button>
        </div>
    </div>
  )
}

export default SingleProduct