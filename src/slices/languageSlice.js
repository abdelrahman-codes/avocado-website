import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "E",
}

const languageReducer = createSlice({
    name: 'language',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = languageReducer.actions;
export default languageReducer.reducer;