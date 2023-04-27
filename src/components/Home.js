import React from 'react'
// import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import './Home.css'
import Products from "./Products"

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img src='https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg' 
        alt='heroimage'
        className='home-image'/>
        <Products/>
      </div>

    </div>
  )
}

export default Home
