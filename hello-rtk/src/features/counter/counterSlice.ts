import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 42,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action: PayloadAction<{ value: number }>) => {
      state.value += action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
