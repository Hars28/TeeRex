import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart";
import Products from "../Components/Products";

const AllRoutes = () => {
    const {cartData} = useSelector(store=>store.cartReducer)
  return (
    <>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"black"}}>
        <Link to="/" style={{textDecoration:"none"}}>
          <h2 style={{color:"white"}}>TEEREX</h2>
        </Link>
        <Link to="/cart">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: "35px", cursor: "pointer", color:"white" }}
          >
            <span id="cart_count" style={{fontSize:"25px"}}>{cartData.length?cartData.length:""}</span>
          </i>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
