import { createSlice } from '@reduxjs/toolkit'

 interface CounterState {
    value: number
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    value: 0
  }
  export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })
  export const { increment, decrement, incrementByAmount } = counterSlice.actions
  export const selectCount = (state:any) => state.counter.value
  export default counterSlice.reducer


