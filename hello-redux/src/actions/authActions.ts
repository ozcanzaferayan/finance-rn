import { AUTH } from '../actionTypes/actionTypes';

export const login = (token: string) => {
  return {
    type: AUTH,
    payload: {
      token,
    },
  };
};
