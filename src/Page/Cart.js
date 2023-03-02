import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/AddProduct/AddProductActions';

const Cart = () => {
    const {cartList,productList} = useSelector((state)=> state)
    const dispatch = useDispatch()

    const incrementHandeler = (productId)=>{
      
      dispatch(increment(productId))
    }
    const decrementHandeler = (productId)=>{
      dispatch(decrement(productId))
    }
  
    return (
        <main class="py-16">
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {
            cartList?.map((signleCartItem)=>  {
             const product = productList.find(product => product.id === signleCartItem.id)
             return <div className="cartCard">
              <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img className="lws-cartImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                  <h4 className="lws-cartName">{product.productName}</h4>
                  <p className="lws-cartCategory">{product.category}</p>
                  <p>BDT <span className="lws-cartPrice">{product.price}</span></p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                  <button className="lws-incrementQuantity"disabled={product.quantity <= 0} onClick={()=>incrementHandeler (signleCartItem.id)}>
                    <i className="text-lg fa-solid fa-plus"></i>
                  </button>
                  <span className="lws-cartQuantity">{product.quantity}</span>
                  <button className="lws-decrementQuantity" disabled={signleCartItem.quantity <= 0}  onClick={()=>decrementHandeler(signleCartItem.id)}>
                    <i className="text-lg fa-solid fa-minus"></i>
                  </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">2200</span></p>
              </div>
              {/* <!-- delete button --> */}
              <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart">
                  <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            })
          }

        </div>

        {/* <!-- Bill Details --> */}
        <div>
          <div className="billDetailsCard">
            <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
            <div className="space-y-4">
              {/* <!-- sub total --> */}
              <div className="flex items-center justify-between">
                <p>Sub Total</p>
                <p>BDT <span className="lws-subtotal">8800</span></p>
              </div>
              {/* <!-- Discount --> */}
              <div className="flex items-center justify-between">
                <p>Discount</p>
                <p>BDT <span className="lws-discount">0</span></p>
              </div>
              {/* <!-- VAT --> */}
              <div className="flex items-center justify-between">
                <p>VAT</p>
                <p>BDT <span className="vat">0</span></p>
              </div>
              {/* <!-- Total --> */}
              <div className="flex items-center justify-between pb-4">
                <p className="font-bold">TOTAL</p>
                <p className="font-bold">BDT <span className="lws-total">8800</span></p>
              </div>
              <button className="placeOrderbtn">place order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    );
};

export default Cart;