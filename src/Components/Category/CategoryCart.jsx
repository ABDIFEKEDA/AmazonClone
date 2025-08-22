import React from 'react'
import classes from './caategory.module.css' // fixed typo
import { CategoryImage } from './CategoryFullInfo'

const CategoryCart = ({ data }) => {
  return (
    <div className={classes.category}>
      <a href="#">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now!</p>
      </a>
    </div>
  )
}

export default CategoryCart
