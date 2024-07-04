import { createSlice } from "@reduxjs/toolkit";

const favSlice=createSlice({
    name:'favourites',
    initialState:{
        favItemList:[],
    },
    reducers:{
        addtofavs(state,action){
            const new_item=action.payload;
            const existing_Item=state.favItemList.find((item) => item.id===new_item.id);
            if(!existing_Item){
                state.favItemList.push({
                    id : new_item.id,
                    price : new_item.price,
                    name:new_item.name,
                    division: new_item.division,
                    category: new_item.category,
                    imageUrl: new_item.imageUrl,
                })
            }
        },
        removeFromfavs(state,action){
            const id=action.payload;
            state.favItemList=state.favItemList.filter((item) => item.id!==id);
        }
    }

});
export const favActions=favSlice.actions;
export default favSlice;
