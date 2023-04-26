import React from 'react'
import CurrencyFormat from "react-currency-format"
import "./Subtotal.css"

const Subtotal = () => {
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        render={(value) =>(
            <>
              <p>Subtotal({basket.length} items): <strong>{value}</strong></p>
              <small className='subtotal-gift'><input type='checkbox'/>This Order contains a gift</small>
            </>
        )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          prefix={'$'}
      />

      <button>Proceed to CheckOut</button>
    </div>
  )
}

export default Subtotal
