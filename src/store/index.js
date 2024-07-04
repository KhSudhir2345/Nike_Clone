import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import favSlice from "./fav-slice";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        favourites:favSlice.reducer,
    }
});
export default store;