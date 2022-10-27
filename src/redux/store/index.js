import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../features'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})