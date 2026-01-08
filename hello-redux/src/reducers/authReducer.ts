import { AUTH } from '../actionTypes/actionTypes';

const initialState = {
  token: null,
};

type Action = {
  type: typeof AUTH;
  payload?: any;
};

export const authReducer = (state = initialState, action: Action) => {
  console.log('AuthReducer', action);
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
