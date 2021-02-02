import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export const Header = () => {
    return (
        <div className="header">
            <p className="header_logo">Shoptiy</p>

            <div className="header_search">
                <input type="text" className="HeaderSearchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="nav">
                <div className="header_option">
                    <span className="header_optionOne">Hello Guest</span>
                    <span className="header_optionTwo">Sign In  </span>
                </div>
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
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionTwo header_basketCount"> 0</span>
                </div>
            </div>
        </div>
    )
}
