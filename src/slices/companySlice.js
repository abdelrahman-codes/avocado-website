import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "0",
}

const companyReducer = createSlice({
    name: 'company',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = companyReducer.actions;
export default companyReducer.reducer;