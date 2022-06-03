import React from 'react'
import './product.css'
//ADD name field to data/products to replace "github repo" w/ actual project name
const Product = ({img,link,repo}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <a href={repo} target="_blank" rel="noreferrer"> Github Repo</a>
      
      </div>
      <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product
