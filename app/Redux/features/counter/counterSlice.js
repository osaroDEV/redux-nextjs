'use client'

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'Counter Slice',
    initialState,
    reducers: {
        add: (state) => {
            state.count += 1
        },
        sub: (state) => {
            state.count -= 1
        }
    }
})

export const {add, sub} = counterSlice.actions

export default counterSlice.reducer