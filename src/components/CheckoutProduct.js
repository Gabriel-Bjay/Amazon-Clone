import React, {useContext} from 'react'
import ShoppingContext from './context/shopping/shoppingContext';
import "./CheckoutProduct.css"

const CheckoutProduct = ({id, image, title, rating, price, hideButton}) => {
  const shoppingContext = useContext(ShoppingContext);
  const {removeFromBasket} = shoppingContext
  const removeFromBasketHandler =() => {
    removeFromBasket({id: id});
  }
  return (
    <div className='checkout-product'>
       <img src={image}alt='' className='checkout-product-image'/>

        <div className='checkout-product-info'>
          <p classname="checkout-product-title">{title}</p>
          <div className='checkout-product-rating'>
          <p>{rating}</p>
              {Array(rating)
              .fill()
              .map(( _, i) => (
                <p>:star:</p>
              ))}
          </div>

          <p className='checkout-product-price'>
              {price}
          </p>
        {!hideButton && <button onClick={removeFromBasketHandler}>Remove From Basket</button>}
        </div>
    </div>
  )
}

export default CheckoutProduct
