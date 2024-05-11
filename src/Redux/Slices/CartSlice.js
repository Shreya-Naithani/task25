import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        cart:[]
    },
    reducers:{
        add:(state,action)=>{
            const existingItem = state.cart.find((item)=>item.id === action.payload.id);
            if(existingItem){
              state.cart = state.cart.map((item)=>item.id === action.payload.id ?({...item , quantity: item.quantity + 1}):(item))

            }
            
            else{
                const newItem={...action.payload,quantity:1}
                state.cart.push(newItem);
            }
        },
        remove:(state,action)=>{
           const existingItem = state.cart.find((item)=>item.id === action.payload.id);
            if(existingItem.quantity > 1){
               state.cart = state.cart.map((item)=>item.id === action.payload.id ?({...item ,quantity: item.quantity - 1}):(item))
            }
            else{

               state.cart = state.cart.filter((item)=>item.id !== action.payload.id)
            }
        }   
     }
});

export const {add ,remove }= CartSlice.actions;
export default CartSlice.reducer;