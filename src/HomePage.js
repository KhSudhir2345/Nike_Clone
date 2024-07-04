import React from "react";
import Home from "./Home";

const HomePage=() =>{
    let lt='<';
    let gt='>';
return(
    <div>
        <div style={{height: '60px',display:'flex',justifyContent:'space-evenly',alignItems: 'center',backgroundColor: '#f7f7f7',marginTop:'50px',fontSize:'14px'}}>
            <p style={{color:'black'}}>{lt}</p>
            <p>Look for Store Pickup at checkout</p>
            <p>{gt}</p>
        </div>
        <header style={{padding:'0px 20px',display:'block'}}>
              <h1 style={{padding:'8px 0px',width:'fit-content',color:'black'}}>All Products(63)</h1>
        </header>
        <div className='Content'>
            <Home />
        </div>
    </div>
)
};
export default HomePage;