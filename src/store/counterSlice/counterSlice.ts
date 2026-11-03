import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
    value: number
}

const initialState: CounterType = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        add: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }

})

export const { increment, decrement, add } = counterSlice.actions
export default counterSlice.reducer