import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "مصر",
}

const countryReducer = createSlice({
    name: 'country',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = countryReducer.actions;
export default countryReducer.reducer;