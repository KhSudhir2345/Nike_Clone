import React, { useRef } from "react";
import CartItem from "./cartItem";
import './Cart.css';
import { useSelector } from "react-redux";

let size=0; 
const useParagraphRef=() =>{
    const paragraphRef=useRef(null);
    return paragraphRef;
};
const handleSize=(paragraphRef) =>{
    if(paragraphRef.current){
        size=paragraphRef.current.innerText;
    }
};
const CartItems = () => {
    let total=0;
    console.log('size',size);
    const cartItems=useSelector((state) => state.cart.itemList);
    cartItems.forEach(item => {
        console.log(item);
        total+=item.total_price;
        console.log(total);
    });
    let GrandTotal=total+0.032*total;
    return (
        <div className="cart-Page">
            <main>
                <div className="ItemList">
                    <h1 style={{color:'black',fontSize:'24px',textAlign:'left'}}>Bag</h1>
                    {cartItems.map(item => (
                        <div className="Cart-Items" key={item.id}>
                            <CartItem id={item.id} price={item.price} name={item.name} quantity={item.quantity} imageUrl={item.imageUrl} division={item.division} category={item.category} size={size} total={item.total_price}></CartItem>
                        </div>
                    ))};
                </div>
                <div className="Bill">
                    <h2 style={{margin:'0px 0px 24px'}}>Summary</h2>
                    <span style={{textAlign:'left'}}>Do you have a Promo a Promo Code?</span>
                    <div style={{margin:'0px 0px 8px',display:'flex',position:'relative',top:'10px',justifyContent:'space-between'}}>
                        SubTotal
                        <span style={{marginLeft:'20px'}}>${total}</span>
                    </div>
                    <div style={{margin:'0px 0px 8px',display:'flex',position:'relative',top:'10px',justifyContent:'space-between'}}>
                        Estimated Shipping & Handling
                        <span>${0.032*total}</span>
                    </div>
                    <div style={{margin:'0px 0px 8px',display:'flex',position:'relative',top:'10px',justifyContent:'space-between'}}>
                        Estimated Tax
                        <span>-</span>
                    </div>
                    <div style={{margin:'0px 0px 8px',display:'flex',position:'relative',top:'10px',justifyContent:'space-between'}}>
                        Total
                        <span>${GrandTotal}</span>
                    </div>
                    <button className="checkout" style={{borderRadius:'20px',width:'340px'}}>
                        Checkout
                    </button>
                    <button className="UPI" style={{borderRadius:'20px',width:'340px'}}>
                        UPI
                    </button>
                </div>
            </main>
        </div>
    )
};

export {useParagraphRef,handleSize};
export default CartItems;
