import React from 'react'

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
                <span class="material-symbols-outlined action-icon">
                    favorite
                    </span>
                <span class="action-name">
                    Wishlist
                </span>
            </div>
            <div class="action-container">
                <span class="material-symbols-outlined action-icon">
                    shopping_bag
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
