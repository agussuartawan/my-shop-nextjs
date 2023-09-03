import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name: 'cartWindow',
    initialState: {
        value: false,
    },
    reducers: {
        showCart: (state) => {
            state.value = !state.value
        },
        hideCart: (state) => {
            state.value = !state.value
        },
    },
})

export const { showCart, hideCart } = cartSlice.actions
export default cartSlice.reducer
