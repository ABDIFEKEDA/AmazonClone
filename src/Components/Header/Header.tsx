import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header_container}>
      {/* Left: Logo + Delivery */}
      <div className={classes.logo_container}>
        <a href="/">
          <img src="/amazon.png" alt="amazon-logo" className={classes.logo}  />
        </a>
        <div className={classes.delivery}>
          <p>Delivered to</p>
          <span>Ethiopia</span>
        </div>
      </div>

      {/* Center: Search */}
      <div className={classes.search}>
        <select>
          <option value="all">All</option>
        </select>
        <input type="text" placeholder="Search product" />
        <CiSearch />
      </div>

      {/* Right: Links and Cart */}
      <div className={classes.right_side}>
        <img src="/image.png" alt="profile" />
        <div>
          <select>
            <option value="en">En</option>
          </select>
        </div>
        <a href="/signin">
          <p>Sign In</p>
          <span>Accounts & Lists</span>
        </a>
        <a href="/orders">
          <p>Returns</p>
          <span>& Orders</span>
        </a>
        <a href="/cart" className={classes.cart}>
          <FaShoppingCart />
          <span>0</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
