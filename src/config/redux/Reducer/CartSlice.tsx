import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice ({
 name:'cart',
 initialState:[],
 reducers : {
    add(state:any,action:any){
        state.push(action.payload)
    }
 }
})
export const {add}=CartSlice.actions

export default CartSlice.reducer;