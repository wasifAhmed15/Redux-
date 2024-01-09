import CartSlice from './Reducer/CartSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        Cart:CartSlice
    }
})

export default store