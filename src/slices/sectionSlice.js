import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const sectionReducer = createSlice({
    name: 'section',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = sectionReducer.actions;
export default sectionReducer.reducer;