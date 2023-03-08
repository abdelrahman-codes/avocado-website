import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const AllservicesReducer = createSlice({
    name: 'allservices',
    initialState,
    reducers: {
        set: (state, { payload }) => {
            state.value = payload;
        }
    }
})

export const { set } = AllservicesReducer.actions;
export default AllservicesReducer.reducer;