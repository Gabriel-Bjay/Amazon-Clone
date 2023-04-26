import React, { useContext, useEffect, useState } from "react";
// import CurrencyFormat from "react-currency-format";
// import axios from "../axios";
import { Link, useHistory } from "react-router-dom";
import ShoppingContext from "./context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"; 
import "./Payment.css";
// import { db } from "../firebase";

const Payment = () => {

    const shoppingContext = useContext(ShoppingContext);
    const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;
  

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
            Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
        <div className="payment_section">
            <div className="payment_title">
            <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
            <p>{user?.email}</p>
            <p>Elm Street Drive</p>
            <p>Nairobi, Kenya</p>
            </div>
        </div>
        <div className="payment_section">
            <div className="payment_title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment_items">
                {basket.map((item) => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    tite={item.tite}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
                ))}
            </div>
            </div>
      </div>
    </div>
  )
}

export default Payment
