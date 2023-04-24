import React, {useContext} from 'react'
import "./Products.css"
import ShoppingContext from '../context/shopping/shoppingContext'

const Product = ({id, image, title, rating, price}) => {
  const shoppingContext = useContext(ShoppingContext);
  const {addToBasket} = shoppingContext

  const addToBasketHandler =()=>{
    addToBasket({item: {id, image, title, rating, price} })
  };
  return (
    <div className='product'>
      <img src={image}alt='' className=''/>

      <div className='product-info'>
        <p>{title}</p>
        <div className='product-rating'>
         <p>{rating}</p>
            {/* {Array(rating)
            .fill()
            .map(( _, i) => (
              <>:star</>
            ))} */}
        </div>

        <p className='product-price'>
            {price}
        </p>

      </div>
      <button className='product-button' onClick={addToBasketHandler}>Add To Basket</button>
    </div>
  )
}

export default Product
