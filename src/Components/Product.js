import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AddProductActions, addToCart } from '../Redux/AddProduct/AddProductActions';


const Product = () => {
  const [update,setUpdate]=useState({})
  const productList = useSelector((state)=> state.productList)
  const dispatch = useDispatch()
  

  // new Id 
 
  // inupt value 
  const handelOnblur = (e)=>{
      const field = e.target.name;
      const value = e.target.value;
      const newValue = {...update}
      newValue[field]=value
      setUpdate(newValue)
  }
  // form Handeler 
  const handelOnSubmit = (e)=>{
    e.preventDefault()
    const id = uuidv4()
    dispatch(AddProductActions({...update,id,quantity:Number(update.quantity),price:Number(update.price)}))
    
  } 

  const addToCartHandeler = (productId)=>{
    dispatch(addToCart(productId))
  }


    return (
        <main className="py-16">
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
          {
            productList?.map((singleProduct,index)=> <div key={index} className="lws-productCard">
            <img className="lws-productImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">{singleProduct.productName}</h4>
              <p className="lws-productCategory">{singleProduct.category}</p>
              <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{singleProduct.price}</span></p> 
                <p className="productQuantity">QTY <span className="lws-quantity">{singleProduct.quantity}</span></p>
              </div>
              <button onClick={()=>addToCartHandeler(singleProduct.id)} className="lws-btnAddToCart">Add To Cart</button>
            </div>
          </div>)
          }
      </div>
      {/* <!-- products container ends --> */}
      <div>
        {/* <!-- Product Input Form --> */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handelOnSubmit}>
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input onBlur={handelOnblur} name='productName' className="addProductInput" id="lws-inputName" type="text" required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input onBlur={handelOnblur} name='category' className="addProductInput" id="lws-inputCategory" type="text" required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input onBlur={handelOnblur} name='imgUrl' className="addProductInput" id="lws-inputImage" type="text" required />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input onBlur={handelOnblur}name='price' className="addProductInput" type="number" id="lws-inputPrice" required />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input onBlur={handelOnblur} name='quantity' className="addProductInput" type="number" id="lws-inputQuantity" required />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
          </form>
        </div>
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </div>
  </main>
    );
};

export default Product;