import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const sectionImageReducer = createSlice({
    name: 'sectionImage',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = sectionImageReducer.actions;
export default sectionImageReducer.reducer;