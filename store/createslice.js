import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, value: true }; // Return a new state object with the updated value
    },
    decrement: (state) => {
      return { ...state, value: false }; // Return a new state object with the updated value
    },
    incrementByAmount: (state, action) => {
      return { ...state, value: state.value + action.payload }; // Return a new state object with the updated value
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;
