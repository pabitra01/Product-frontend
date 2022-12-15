import { apiClient } from "../../../services/apiClient";
import { reduxAction } from "../base";
import { GET_UNSOLD_PRODUCTS, POST_PRODUCT } from "./type";
const url = process.env.REACT_APP_BASE_URL||'http://localhost:5000/api/v1/capital';
export const postProductAction=(value,cb)=>{
    return dispatch => {
        apiClient({ method: 'POST', url: `${url}/product`, data: value })
          .then(({ data }) => {
            if (data) {
              dispatch(reduxAction(POST_PRODUCT,data.product))
              if (cb) {
                cb();
              }
            }
          })
          .catch(() => {
            // dispatch(reduxAction(USER_LOGIN_PENDING, false));
          });
      };
}
export const getUnsoldProductsAction = () => {
    return dispatch => {
      apiClient({ method: 'GET', url:`${url}/products` })
        .then(({ data }) => {
          dispatch(reduxAction(GET_UNSOLD_PRODUCTS, data.allProducts));
        })
        .catch(() => {
        });
    };
  };
  export const postPurchasedProductAction=(value,cb)=>{
    return () => {
        apiClient({ method: 'POST', url: `${url}/purchase/${value.id}`, data: value })
          .then(({ data }) => {
            if (data) {
              if (cb) {
                cb();
              }
            }
          })
          .catch(() => {
            // dispatch(reduxAction(USER_LOGIN_PENDING, false));
          });
      };
}