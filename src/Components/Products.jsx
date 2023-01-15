import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, getProducts, searchProducts } from "../Store/Actions/productAction";
import Styles from "./products.module.css";
import SingleProduct from "./SingleProduct";
const Products = () => {
  const { loading, productData, filterData } = useSelector(
    (store) => store.productReducer
  );
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const getCategories = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories([...categories.filter((e) => e != value)]);
    }
  };
  const handleSearch = (data)=>{
    dispatch(searchProducts(data,search))
  }
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(filterProducts(productData, categories));
  }, [categories]);

  return (
    <>
      <div id={Styles.input_div}>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search for Products" />
        <i className="fa fa-search" onClick={()=>handleSearch(productData)} aria-hidden="true" style={{cursor:"pointer"}}></i>
      </div>
      <div id={Styles.main_container}>
        <div id={Styles.search_section}>
          {/* color filter box */}
          <div id={Styles.checkBoxDiv}>
            <h4>Color</h4>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"Red"} />{" "}
              <label htmlFor="">Red</label>
            </div>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"Blue"} />{" "}
              <label htmlFor="">Blue</label>
            </div>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"Green"} />{" "}
              <label htmlFor="">Green</label>
            </div>
          </div>
          {/* gender filter box */}
          <div id={Styles.checkBoxDiv}>
            <h4>Gender</h4>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"Men"} />{" "}
              <label htmlFor="">Men</label>
            </div>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"Women"} />{" "}
              <label htmlFor="">Women</label>
            </div>
          </div>
          {/* price filter box */}
          <div id={Styles.checkBoxDiv}>
            <h4>Price</h4>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"250"} />{" "}
              <label htmlFor="">0-250</label>
            </div>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"251"} />{" "}
              <label htmlFor="">251-450</label>
            </div>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"451"} />{" "}
              <label htmlFor="">451 and above</label>
            </div>
          </div>
          {/* type filter div */}
          <div id={Styles.checkBoxDiv}>
            <h4>Type</h4>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"Polo"} />{" "}
              <label htmlFor="">Polo</label>
            </div>
            <div id={Styles.check_box}>
              <input
                type="checkbox"
                onChange={getCategories}
                value={"Hoodie"}
              />{" "}
              <label htmlFor="">Hoodie</label>
            </div>
            <div id={Styles.check_box}>
              <input type="checkbox" onChange={getCategories} value={"Basic"} />{" "}
              <label htmlFor="">Basic</label>
            </div>
          </div>
        </div>
        <div id={Styles.products_section}>
          {loading && (
            <img
              id={Styles.loader}
              src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif"
              alt="loader-image"
            />
          )}
          {filterData.length
            ? filterData.map((item) => (
                <SingleProduct item={item} key={item.id} />
              ))
            : productData.map((item) => (
                <SingleProduct item={item} key={item.id} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Products;
