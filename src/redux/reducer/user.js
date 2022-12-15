import {
  GET_USER_PENDING,
  USER,
  USER_LOGIN_PENDING,
  USER_REGISTER_PENDING,
} from '../action/user/type';

const initialState = {
  user: null,
  isRegisterPending: false,
  isLoginPending: false,
  getUserPending: false,

};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER:
      return {
        ...state,
        user: payload,
      };
    case USER_REGISTER_PENDING:
      return {
        ...state,
        isRegisterPending: payload,
      };
    case USER_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: payload,
      };
    case GET_USER_PENDING:
      return {
        ...state,
        getUserPending: payload,
      };
    default: {
      return state;
    }
  }
};
