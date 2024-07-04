import React from "react";
import { Link } from "react-router-dom";
import nikeIcon from './assets/nike_logo.png'
import favouritesIcon from './assets/favourites.png'; 
import cartIcon from './assets/Cart.png';
import searchIcon from './assets/Search.png'

const Navbar=() => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={nikeIcon}></img>
                </Link>
            </div>
            <div className="categories">
                <Link to="#">New & Featured</Link>
                <Link to="#">Men</Link>
                <Link to="#">Women</Link>
                <Link to="#">Kids</Link>
                <Link to="#">Sale</Link>
                <Link to="#">Customise</Link>
                <Link to="#">SNKRS</Link>
            </div>
            <div className="functions">
                <div className="searchbar" style={{display:'flex',alignItems:'center',border:'1px solid black',borderRadius:'10px',height:'36px',width:'300px'}}>
                    <img src={searchIcon} style={{width:'45px',height:'32px',objectFit:'cover'}}></img>
                    <input type="text" placeholder="Search" style={{border:'none',height:'36px',outline:'none'}}></input>
                </div>
                <Link to="/favourites">
                    <img src={favouritesIcon}></img>
                </Link>
                <Link to="/cart">
                    <img src={cartIcon}></img>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar;