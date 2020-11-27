import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__options">
                    <span className="header__optionsOne">Hello guest</span> 
                    <span className="header__optionsTwo">Sign In</span>
                    </div>
                <div className="header__options">
                <span className="header__optionsOne">Returns</span> 
                    <span className="header__optionsTwo">Orders</span> 
                    </div>
                <div className="header__options">
                <span className="header__optionsOne">Your</span> 
                    <span className="header__optionsTwo">Prime</span> 
                    </div>
                    <div className="header__optionsBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionsTwo header__basketCount" >0</span>
                    </div>
    
            </div>
        </div>
    )
}

export default Header
