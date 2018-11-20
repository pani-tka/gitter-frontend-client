import api from './api';

export const CHANGE_TOKEN = 'CHANGE_TOKEN';
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS';
export const VERIFY_TOKEN_FAILURE = 'VERIFY_TOKEN_FAILURE';

export const changeToken = (token) => ({
     type: CHANGE_TOKEN,
     token,
});

// @question: why we not pass token as parameter?
export const verifyTokenSuccess = () => ({
     type: VERIFY_TOKEN_SUCCESS,
});

export const verifyTokenFailure = () => ({
     type: VERIFY_TOKEN_FAILURE,
});

// export const fetchUser = () => {
//      dispatch({
//           type: REQUEST_USER,
//      });

//      api.fetchUser()
//           .then(response => {
//                dispatch({
//                     type: REQUEST_USER_SUCCESS,
//                     user: response[0],
//                });
//           })
//           .catch(error => {
//                dispatch({
//                     type: REQUEST_USER_FAILURE,
//                     error: error.toString();
//                })
//           })
// }
