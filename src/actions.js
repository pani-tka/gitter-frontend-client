import Api from './api';

export const CHANGE_TOKEN = 'CHANGE_TOKEN';
export const VERIFY_TOKEN_SUCCESS = 'VERIFY_TOKEN_SUCCESS';
export const VERIFY_TOKEN_FAILURE = 'VERIFY_TOKEN_FAILURE';

export const REQUEST_USER = 'REQUEST_USER';
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';

export const REQUEST_ROOM_LIST = 'REQUEST_ROOM_LIST';
export const REQUEST_ROOM_LIST_SUCCESS = 'REQUEST_ROOM_LIST_SUCCESS';

const api = new Api();

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

const requestUser = () => ({
     type: REQUEST_USER,
});

const requestUserSuccess = (data) => ({
     type: REQUEST_USER_SUCCESS,
     user: data[0],
});

// thunk action (magic)
export const fetchUser = () => {
     return (dispatch, getState) => {
          const { verifiedToken } = getState();
          
          dispatch(requestUser());

          api.setToken(verifiedToken);

          api.fetchUser()
               .then(response => {
                    dispatch(requestUserSuccess(response));
               });
     }
};

const requestRoomList = () => ({
     type: REQUEST_ROOM_LIST,
});

const requestRoomListSuccess = (data) => ({
     type: REQUEST_ROOM_LIST_SUCCESS,
     rooms: data,
});

export const fetchRooms = () => {
     return (dispatch, getState) => {
          const { verifiedToken } = getState();
          
          dispatch(requestRoomList());

          api.setToken(verifiedToken);

          api.fetchRooms()
               .then(response => {
                    dispatch(requestRoomListSuccess(response));
               });
     }

};
