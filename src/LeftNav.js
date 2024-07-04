import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const LeftNav=() => {
    return(
        <div className="products">
            {/* <header style={{padding:'0px 20px'}}>
                <h1 style={{padding:'8px 0px',display:'block'}}>All Products</h1>
            </header> */}
            <div className="Left-Nav">
                <nav className="leftnav">
                    <div id="pickup" style={{width:'fit-content',display:'flex',justifyContent:'space-evenly'}}>
                        <p>Pick Up Today</p>
                        <ToggleSwitch />
                    </div>
                    <div className="categories">
                        <a href="#">Shoes</a>
                        <a href="#">Hoodies & PullOvers</a>
                        <a href="#">Jackets & Vests</a>
                        <a href="#">Pants & Tights</a>
                        <a href="#">Tops & T-shirts</a>
                        <a href="#">Jerseys</a>
                        <a href="#">Shorts</a>
                        <a href="#">Tights & Leggings</a>
                        <a href="#">Sports Bras</a>
                        <a href="#">Compression & Baselayer</a>
                        <a href="#">Tracksuits</a>
                        <a href="#">Swimwear</a>
                        <a href="#">Socks</a>
                        <a href="#">Accesories & Equipment</a>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Gender</div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Kids</div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Sale & Offers</div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Color</div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Shop by Price</div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Brand</div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Sports & Activities</div>
                        </div>
                    </div>
                    <div className="filters">
                        <div className="filter-group">
                            <div>Best For</div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default LeftNav;