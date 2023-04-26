import { useContext } from 'react';
import React from 'react'
import { Link} from 'react-router-dom/cjs/react-router-dom.min'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
// import AuthContext from "../../context/authContext"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingContext from '../context/shopping/shoppingContext';
import {auth} from "../../firebase"


const Header = () => {
    const shoppingContext = useContext(ShoppingContext);
    const {basket, user} = shoppingContext

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    // const ctx = useContext(AuthContext)
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
            <div className='header-nav' >
                {/* {ctx.isLoggedIn ? (<Link to = "/">
                    <div className='header-option'>
                    onClick={ctx.onLogout }
                        <span className='header-option1'>Hello User</span>
                        <span className='header-option2'>Sign Out</span>
                    </div>  </Link>):(*/}
                <Link to = {!user && '/login'}>
                    <div className='header-option' onClick={handleAuthentication}>
                        <span className='header-option1'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header-option2'>{!user  ? 'Sign In': 'Sign Out'}</span>
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
                    <span className='header-option2 header-basketCount'>{basket?.length}</span>
                </div>
            </div>
            
        </header>
            )
}

export default Header
