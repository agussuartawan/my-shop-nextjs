import { createSlice } from '@reduxjs/toolkit'

export const cartListSlice = createSlice({
    name: 'cartList',
    initialState: {
        value: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const { setCart } = cartListSlice.actions
export default cartListSlice.reducer
