import React from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./Products.css"
import Product from './Product'

const Products = () => {
  return (
    <div className='products-row'>
      <Product
        id = "1"
        title = " SteelSeries Arctis 5 - RGB Illuminated Gaming Headset with DTS Headphone: X v2.0 Surround - for PC and PlayStation 4 - Black"
        image = "https://m.media-amazon.com/images/I/81Y9BnR2+hL._AC_UY218_.jpg"
        rating = {4}
        price = "$59.99"
      />
      <Product
        id = "2"
        title = " HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for Instant Ink"
        image = "https://m.media-amazon.com/images/I/71dncPbANKL._AC_UL320_.jpg"
        rating = {3}
        price = "$37.49"
      />
      <Product
        id = "3"
        title = "iPhone Charger Fast Charging,【Apple MFi Certified】 2Pack 20W Type C Fast Charger Block with 6FT USB C to Lightning Cable for iPhone 14/13"
        image = "https://m.media-amazon.com/images/I/61nKJ+3s3XL._AC_UL320_.jpg"
        rating = {4}
        price = "$12.49"
      />
      <Product
        id = "4"
        title = "Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
        image = "https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
        rating = {5}
        price = "$61.11"
      />
      <Product
        id = "5"
        title = "Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation, & Xbox -1-Year Rescue Service (STGX2000400)"
        image = "https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
        rating = {4}
        price = "$61.11"
      />
      <Product
        id = "6"
        title = "SteelSeries Apex 3 TKL RGB Gaming Keyboard – Tenkeyless Compact Form Factor - 8-Zone RGB Illumination – IP32 Water & Dust Resistant – Whisper Quiet Gaming Switch – Gaming Grade Anti-Ghosting"
        image = "https://m.media-amazon.com/images/I/81dLH5W903L._AC_UY218_.jpg"
        rating = {3}
        price = "$39.98"
      />

    </div>
  )
}

export default Products
