import { CHANGE_TOKEN, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAILURE } from "./actions";

const INITIAL_STATE = {
    tokenField: '011c376dcb352c7a30ae8ec3b9a212f58339c013', // value for authorization component
    tokenVerificationError: null,
    verifiedToken: '',

    dataLoaded: false,
    dataLoading: false,
    dataLoadingError: null,

    user: null,
    rooms: null,

    messages: null,
    messagesLoading: false,
    messagesLoadingError: null,

    selectedRoomID: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_TOKEN: {
            const nextState = {
                ...state,
                tokenField: action.token,
            };

            return nextState;
        }
        case VERIFY_TOKEN_SUCCESS: {
            const nextState = {
                ...state,
                tokenVerificationError: null,
                verifiedToken: state.tokenField,
            };

            return nextState;
        }
        case VERIFY_TOKEN_FAILURE: {
            const nextState = {
                ...state,
                tokenVerificationError: 'Your token invalid',
            };

            return nextState;
        }
        default:
            return state;
    }
};
