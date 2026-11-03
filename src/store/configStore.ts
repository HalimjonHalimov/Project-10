import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './counterSlice/counterSlice'
import usersReducer from './usersSlice/usersSlice'

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        users: usersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch