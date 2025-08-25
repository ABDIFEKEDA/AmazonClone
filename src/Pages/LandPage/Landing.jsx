import React from 'react'
// import classes from './Landing.module.ss';
import LayOut from '../../Components/LayOut/LayOut';
import Carousels from "../../Components/Carousel/Carousel"
import Category from "../../Components/Category/Category"
import Products from "../../Components/Products/Products"

function Landing() {
  return (
    <LayOut>
        <Carousels />
        <Category />
        <Products />
         
    </LayOut>
  )
}

export default Landing