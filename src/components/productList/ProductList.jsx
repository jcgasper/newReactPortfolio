import React from 'react'
import './productList.css'
import Product from "../product/Product"
import {products} from "../../data"
const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
          <h1 className="pl-title"> Code Portfolio</h1>
          <p className="pl-desc">
              Below you will find my completed Web Development projects. Clicking the image will take you to the deployed application which.
              The name above will take you to the Github repository. Feel free to poke around my Github to see more projects that I have chose not to display.
          </p>
      </div>
      <div className="pl-list">
          {products.map((item) => (
            <Product  key={item.id} img={item.img} link ={item.link} repo ={item.repo} />
          ))}
          
      </div>
    </div>
  )
}

export default ProductList
