import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
    page: 1
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        querySearch:(state, action) => {
            state.value = action.payload
        }
    }
})
export const { querySearch } = counterSlice.actions

export default counterSlice.reducer