import React from "react";
import FavItem from "./favItem";
import './fav.css'
import { useSelector } from "react-redux";

const FavItems = () =>{
    const favList=useSelector((state) => state.favourites.favItemList);
    console.log(favList);
    return(
        <div className="favItemsDisplay">
            <h1 style={{textAlign:'left',color:'black'}}>Favourites</h1>
            <div className="favproducts">
                {favList.map(item => (
                    <FavItem id={item.id} price={item.price} division={item.division} category={item.category} name={item.name} imageUrl={item.imageUrl}></FavItem>
                ))};
            </div>
        </div>
    )
};

export default FavItems;