import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE } from '../actionTypes/actionTypes';

const initialState = {
  value: 42,
};

type Action = {
  type: typeof INCREMENT | typeof DECREMENT | typeof INCREMENT_BY_VALUE;
  payload?: any;
};

export const counterReducer = (state = initialState, action: Action) => {
  console.log('counterReducer', action);
  switch (action.type) {
    case 'INCREMENT':
      // Immutable update
      // Kopyalayarak değiştirme
      // Referansı değiştirmek istiyoruz ki değişiklik algılansın
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'INCREMENT_BY_VALUE':
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    default:
      return state;
  }
};
