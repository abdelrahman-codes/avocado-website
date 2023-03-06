import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const questionReducer = createSlice({
    name: 'question',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = questionReducer.actions;
export default questionReducer.reducer;