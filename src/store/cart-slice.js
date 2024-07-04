import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        itemList:[],
        totalQuantity: 0,
        showCart:false,
    },
    reducers:{
        addtoCart(state,action) {
            const new_item=action.payload;
            const existing_Item=state.itemList.find((item) => item.id===new_item.id);
            if(existing_Item){
                existing_Item.quantity++;
                existing_Item.total_price+=new_item.price;
            }
            else{
                state.itemList.push({
                    id: new_item.id,
                    price:new_item.price,
                    quantity:1,
                    total_price:new_item.price,
                    name:new_item.name,
                    size:new_item.size,
                    imageUrl: new_item.imageUrl,
                    division: new_item.division,
                    category: new_item.category,

                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state,action) {
            const id=action.payload;
            const existing_Item=state.itemList.find((item)=>item.id===id);
            if(existing_Item.quantity===1){
                state.itemList=state.itemList.filter((item) => item.id!==id);
                state.totalQuantity--;
            }
            else{
                existing_Item.quantity--;
                existing_Item.total_price=existing_Item.total_price-=existing_Item.price;
            }
        }
    }
});
export const cartActions=cartSlice.actions;
export default cartSlice;

// productname , quantity, total, price, id, imageUrl,division,category,size