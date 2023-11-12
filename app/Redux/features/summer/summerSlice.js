import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 20
}

const summerSlice = createSlice({
    name: 'Summer Slice',
    initialState,
    reducers: {
        sum: (state) => {
            state.value += 10
        }
    }
})

export const {sum} = summerSlice.actions

export default summerSlice.reducer