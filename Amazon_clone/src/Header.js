import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationIcon from "@material-ui/icons/LocationOn";
import { Link as Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './Fire'
import MoreIcon from "@material-ui/icons/MoreHoriz";

function Header() {

  const [{ basket, user }, dispatch] = useStateValue(); 

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to= {'/'} >
      <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazonlogo'/>
      </Link>
      <div className='header_optionn'>
      <span className='header_optionLineOne'>Deliver to</span>
      <span className='header_optionLineTwoo'><LocationIcon></LocationIcon>Nigeria</span></div> 
      <div className='header_search'>
            <input className='header_searchInput' type='text' />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
          <Link to= {!user && '/login'} >
           <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                <span className='header_optionLineTwo'> {user ?'Sign Out' : 'Sign In'}</span>
            </div> 
            </Link>
           <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span></div> 
           <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span></div> 
                <Link to='/Checkout'>
                <div className='header_optionBasket'>
                  <ShoppingBasketIcon />
                  <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                </div></Link>
        </div>
        <MoreIcon className='responsive--icon' on/>
    </div>
  )
}

export default Header