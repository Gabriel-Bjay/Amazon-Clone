import React from 'react'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <header className="header">
        <Link to="/">
             <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
             className= "header-logo" 
             alt='Amazon Google'/>
        </Link>
        <div className='header-search'>
            <input className='header-input' type='text'/>
            <SearchIcon className="search-icon"/>
        </div>
        <div className='header-nav'>
            <Link to = "/login">
                <div className='header-option'>
                    <span className='header-option1'>Hello Guest</span>
                    <span className='header-option2'>Sign In</span>
                </div>
            </Link>
            
            <div className='header-option'>
                <span className='header-option1'>Returns</span>
                <span className='header-option2'>& Orders</span>
            </div>
            <div className='header-option'>
                <span className='header-option1'>Your</span>
                <span className='header-option2'>Prime</span>
            </div>
            <div className='header-optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header-option2 header-basketCount'>0</span>
            </div>
        </div>
        
    </header>
  )
}

export default Header
