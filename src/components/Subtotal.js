import React from 'react'
import CurrencyFormat from "react-currency-format"

const Subtotal = () => {
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        render={(value) =>
            <>
              <p>Subtotal({})</p>
            </>
        }
      />
    </div>
  )
}

export default Subtotal
