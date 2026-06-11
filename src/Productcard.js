import React from 'react'
import image from './/food.jpg';
function Productcard() {
  return (
    <div className='product-box'>
    
        <img src={image} alt="Product Image"/>
        <div className='product-details'>
            <h3>Chicken Burger</h3>
            <p>Delicious chicken burger with fresh ingredients.</p>
            <p className='price'>$19.99</p>
            <button className='add-to-cart'>Add to Cart</button>
        </div>   
    </div>

  )
}

export default Productcard
