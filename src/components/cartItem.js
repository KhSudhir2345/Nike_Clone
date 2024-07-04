import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import favouritesIcon from "../assets/favourites.png"
import { Link } from "react-router-dom";
import deleteIcon from "../assets/delete.png";
import './Cart.css'
const CartItem=({ name , quantity, total, price, id, imageUrl,division,category,size}) => {
    const dispatch=useDispatch();
    console.log({name});
    const removeItem = () => {
        dispatch(cartActions.removeFromCart(id));
    };
    const addItem= () => {
        dispatch(
            cartActions.addtoCart({
                id,
                name,
                price,
                imageUrl,
                division,
                category,
                size
            })
        );

    };
    return(
        <div className="cart-Item">
            <img src={imageUrl}></img>
            <div className="Item-Details">
                    <h2 style={{color:'black'}}>{name}</h2>
                    <div>{division}'s {category}</div>
                    <div style={{display:'flex',color:'#707072',justifyContent:'center',position:'relative',top:'10px'}}>
                        <span style={{padding:'0px 10px 0px 0px'}}>Size</span>
                        <span style={{padding:'0px 0px 2px'}}>{size}</span>
                        <span style={{paddingLeft:'16px'}}>Quantity</span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>{quantity}</span>
                        <button style={{paddingLeft:'5px'}} onClick={addItem}>+</button>
                    </div>
                    <ul style={{listStyleType:'none'}}>
                        <li style={{display:'inline'}}>
                            <Link to="#">
                                <img src={favouritesIcon} style={{position:'relative',right:'80px'}}></img>
                            </Link>
                        </li>
                        <li style={{display:'inline'}}>
                            <button onClick={removeItem} style={{backgroundColor:'white',border:'none',position:'relative',right:'60px'}}>
                                <img src={deleteIcon}></img>
                            </button>
                        </li>
                    </ul>
            </div>
            <div className="Total-Amount">
                <span style={{color:'#111111',padding:'0px 14px 0px 0px',position:'relative',top:'28px',fontWeight:'600'}}>${total}</span>
            </div>
        </div>
    )
};
export default CartItem;