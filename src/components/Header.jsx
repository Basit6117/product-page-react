import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";


const Header = () => {
  return (
    <header>
        <div class="logo-cont"><a href="#"><img class="home" src="https://simicart.com/wp-content/uploads/eCommerce-logo-1.jpg" alt="" /></a></div>
        <nav class="nav-bar">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
        </nav>

        <div class="action-bar">
            <div class="action-container">
                <span class="action-icon">
                    <FaRegHeart />
                    </span>
                <span class="action-name">
                    Wishlist
                </span>
            </div>
            <div class="action-container">
                <span class="action-icon">
                    <MdOutlineShoppingBag />
                    </span>
                <span class="action-name">
                    bag
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header
