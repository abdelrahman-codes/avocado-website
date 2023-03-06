import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "0",
}

const serviceReducer = createSlice({
    name: 'service',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = serviceReducer.actions;
export default serviceReducer.reducer;