import { createSlice } from '@reduxjs/toolkit'

export const cartCounter = createSlice({
    name: 'cartCount',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value++
        },
    },
})

export const { increment } = cartCounter.actions
export default cartCounter.reducer
