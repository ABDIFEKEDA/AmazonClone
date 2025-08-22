import React from 'react'
import { CategoryImage } from './CategoryFullInfo';
import CategoryCart from './CategoryCart';
import classes from "./caategory.module.css"; // <-- check spelling

const Category = () => {
  return (
    <section className={classes.category_container}>
      {CategoryImage.map((infos, index) => (
        <CategoryCart key={index} data={infos} />
      ))}
    </section>
  );
};

export default Category;
