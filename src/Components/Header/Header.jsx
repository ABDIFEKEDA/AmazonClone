import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/signin">
          <p>Sign In</p>
          <span>Accounts & Lists</span>
        </Link>
        < Link to="/orders">
          <p>Returns</p>
          <span>& Orders</span>
        </ Link>
        <Link to ="/cart" className={classes.cart}>
          <FaShoppingCart />
          <span>0</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
