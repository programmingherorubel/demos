import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
    const cart = useSelector((state)=> state.cartList)
    console.log(cart)
    
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
            <a href="index.html">
                <img src={logo} alt="LWS" className="max-w-[140px]" />
            </a>

            <div className="flex gap-4">
                <a href="#" className="navHome" id="lws-home"> Home </a>
                <Link to='/cart'>
                <a href="#" className="navCart" id="lws-cart">
                <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                {/* <span id="lws-totalCart">{cartList.length}</span> */}
                </a>
                </Link>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;