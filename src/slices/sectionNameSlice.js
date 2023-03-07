import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const sectionNameReducer = createSlice({
    name: 'sectionName',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = sectionNameReducer.actions;
export default sectionNameReducer.reducer;