import { GET_UNSOLD_PRODUCTS, POST_PRODUCT } from '../action/products/type';
  const initialState = {
    postProduct:null,
    unsoldProducts:null,
  
  };
  export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case POST_PRODUCT:
        return {
          ...state,
          postProduct: payload,
        };
      case GET_UNSOLD_PRODUCTS:
        return{
            ...state,
            unsoldProducts:payload
        }
      default: {
        return state;
      }
    }
  };
  