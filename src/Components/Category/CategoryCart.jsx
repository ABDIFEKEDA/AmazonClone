import React from 'react';
import { Link } from 'react-router-dom';
import classes from './caategory.module.css'; // fixed typo
import { CategoryImage } from './CategoryFullInfo';

const CategoryCart = ({ data }) => {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now!</p>
      </Link>
    </div>
  );
}

export default CategoryCart;
