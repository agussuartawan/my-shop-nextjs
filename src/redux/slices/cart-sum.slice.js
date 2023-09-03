import { createSlice } from '@reduxjs/toolkit'

export const cartSum = createSlice({
    name: 'cartSum',
    initialState: {
        value: 0,
    },
    reducers: {
        sum: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { sum } = cartSum.actions
export default cartSum.reducer
