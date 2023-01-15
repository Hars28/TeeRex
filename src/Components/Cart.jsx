import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCartItem, removeFromCart } from '../Store/Actions/cartAction'
import Styles from "./cart.module.css"
const Cart = () => {
    let {cartData,total} = useSelector(store=>store.cartReducer)
    const dispatch = useDispatch()
    const handleQty = (cartData,val,id)=>{
        dispatch(increaseCartItem(cartData,val,id))
    }
    const handleDelete=(cart,id)=>{
        dispatch(removeFromCart(cart,id))
        alert("Item removed from cart")
    }
  return (
    <div id={Styles.cart_container}>
        <div id={Styles.cart_main}>
            {cartData.length?cartData.map((item,ind)=>{
                total = total+(item.price*item.qty)
                return(
                    <div key={item.id} id={Styles.items_div}>
                        <img src={item.imageURL} alt="item_image"/>
                        <div id={Styles.name_price}>
                            <p>{item.name}</p>
                            <p>Item Price : ₹ {item.price}</p>
                            <p>Net Price : ₹ {item.price*item.qty}</p>
                        </div>
                        <select onChange={(e)=>handleQty(cartData,e.target.value,item.id)} id={Styles.qty}>
                          <option value={1}>Qty 1</option>
                          <option value={2}>Qty 2</option>
                          <option value={3}>Qty 3</option>
                          <option value={4}>Qty 4</option>
                        </select>
                        <button onClick={()=>handleDelete(cartData,item.id)}>Remove</button>
                    </div>
                )
            }):<h2>Your cart is empty</h2>}
        </div>
        <h3>{total!==0?`Total = ₹ ${total}`:`Add items to get price`}</h3>

    </div>
  )
}

export default Cart