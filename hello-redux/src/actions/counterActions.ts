import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from '../actionTypes/actionTypes';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementByValue = (value: number) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: {
      value,
    },
  };
};
