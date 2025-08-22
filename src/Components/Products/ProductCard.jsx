import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFOrmat from '../CurrencyFormat/CurrencyForm';
import classes from './Products.module.css';

const ProductCard = ({ product }) => {
const {image,title,rating,price} =product;

  return (
    <div className={`${classes.card_container}`}
>
      {/* Image */}
      <div>
        <a href="#">
          <img
            src={image}
            alt=""
          />
        </a>
      </div>

      {/* Title */}
      <h3>{title}</h3>

      {/* Rating and price */}
      <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.01}/> 
           <small>{rating.count}</small>  
      </div>
      <div>
         <CurrencyFOrmat amount={price} />
      </div>
       <button className={classes.button}>add to cart</button>
      {/* Optional description */}
      <div>{product.description?.substring(0, 60)}...</div>
    </div>
  );
};

export default ProductCard;
