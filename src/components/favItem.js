import React from "react";
import { Link } from "react-router-dom";
import './fav.css'
import { useDispatch } from "react-redux";
import { favActions } from "../store/fav-slice";

const FavItem=({name,price,id,division,category,imageUrl}) => {
    console.log('image ki url hu main',imageUrl);
    const dispatch=useDispatch();
    const remove=() => {
        dispatch(favActions.removeFromfavs(id));
    };
    return(
        <div className="fav-Item">
            <Link to={`/products/${id}`}>
                <div className="image-holder">
                    <img src={imageUrl}></img>
                </div>
            </Link>
            <div className="description">
                <div>
                    <p style={{color:'#111111',fontWeight:'600'}}>{name}</p>
                    <p style={{color:'#757575'}}>{division}'s {category}</p>
                </div>
                <span style={{padding:'8px'}}>${price}</span>
            </div>
            <div className="button-holder">
                <button>Select Size</button>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    );
};
export default FavItem;
