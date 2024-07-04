import React from "react";
import jordanIcon from './assets/Jordan.png'
import converseIcon from './assets/Converse.png'
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth-slice";
const TopNav=() => {
    const dispatch=useDispatch();
    return(
        <div className="topnav">
            <div style={{width:'780px',display:'flex',height:'36px'}}>
                <a href="#"><img style={{width:'40px',height:'40px',objectFit:'cover'}} src={jordanIcon}></img></a>
                <a href="#"><img style={{width:'40px',height:'40px',objectFit:'cover',position:'relative',left:'20px'}} src={converseIcon}></img></a>
            </div>
            <div style={{width:'780px',display:'flex',height:'36px',justifyContent:'flex-end'}}>
                <div style={{display:'flex',justifyContent:'space-evenly',width:'350px',alignItems:'center'}}>
                    <a href="#" style={{color:'black',textDecoration:'none',fontSize:'12px',fontWeight:'600'}}>Find a Store  </a>
                    <span>|</span>
                    <a href="#" style={{color:'black',textDecoration:'none',fontSize:'12px',fontWeight:'600'}}>   Help  </a>
                    <span>|</span>
                    <a href="#" style={{color:'black',textDecoration:'none',fontSize:'12px',fontWeight:'600'}}>   Join Us   </a>
                    <span>|</span>
                    <a href="#" style={{color:'black',textDecoration:'none',fontSize:'12px',fontWeight:'600'}}>  Sign-Up   </a>
                    <span>|</span>
                    <button style={{color:'black',textDecoration:'none',fontSize:'12px',fontWeight:'600',border:'none',backgroundColor:'#f7f7f7'}} onClick={() => {
                        dispatch(authActions.logout());
                    }}>  Logout   </button>
                </div>
            </div>
        </div>
    )
};
export default TopNav;