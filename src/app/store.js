import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/slices/cart.slice'
import cartCountReducer from '../redux/slices/cart-counter.slice'
import cartListReducer from '@/redux/slices/cart-list.slice'
import cartSumReducer from '@/redux/slices/cart-sum.slice'

export default configureStore({
    reducer: {
        showCart: cartReducer,
        countCart: cartCountReducer,
        carts: cartListReducer,
        totalCart: cartSumReducer,
    },
})
