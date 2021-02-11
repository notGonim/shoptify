import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

export const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()

    const handleSignOut = () => {
        if (user) {
            auth.signOut()
        }
    }


    return (
        <div className="header">
            <Link to='/'>
                <p className="header_logo">Shoptiy</p>
            </Link>
            <div className="header_search">
                <input type="text" className="HeaderSearchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="nav">
                <Link to="/login" >
                    <div className="header_option" onClick={handleSignOut}>
                        <span className="header_optionOne">Hello {user ? user.email : ","}</span>
                        <span className="header_optionTwo"> {user ? "Sign Out" : "Sign In"}  </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionOne">Return</span>
                    <span className="header_optionTwo"> & Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionOne">
                        Your
                   </span>
                    <span className="header_optionTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

// check wether the user is logged in or not to change the header