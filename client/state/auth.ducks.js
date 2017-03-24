import { authModel as initial } from './initialState';

export const APP_LOADED_SAGA = 'AUTH/APP_LOADED_SAGA';
export const ASSIGN_NEW_USER_ID = 'AUTH/ASSIGN_NEW_USER_ID';
export const RESTORE_EXISTING_USER = 'AUTH/RESTORE_EXISTING_USER';

export const LOGIN_SUBMIT_SAGA = 'AUTH/LOGIN_SUBMIT_SAGA';
export const LOGIN_SUBMIT_REQUEST = 'AUTH/LOGIN_SUBMIT_REQUEST';
export const LOGIN_SUBMIT_SUCCESS = 'AUTH/LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'AUTH/LOGIN_SUBMIT_ERROR';

export const actions = {
	appLoaded: () => ({ type: APP_LOADED_SAGA }),
	assignNewUserId: (userId) => ({ type: ASSIGN_NEW_USER_ID, userId }),
	restoreExistingUser: (userId) => ({ type: RESTORE_EXISTING_USER, userId }),
	loginSubmitSaga: (username, password) => ({ type: LOGIN_SUBMIT_SAGA, username, password }),
	loginSubmitRequest: () => ({ type: LOGIN_SUBMIT_REQUEST }),
	loginSubmitSuccess: (result) => ({ type: LOGIN_SUBMIT_SUCCESS, result }),
	loginSubmitError: () => ({ type: LOGIN_SUBMIT_ERROR }),
};

export default function authAppState(state = initial, action) {
    switch (action.type) {
      case APP_LOADED_SAGA:
				return {
					...state,
					loaded: true
				};
      case ASSIGN_NEW_USER_ID:
				return {
					...state,
					userId: action.userId
				};
      case RESTORE_EXISTING_USER:
				return {
					...state,
					userId: action.userId
				};
      case LOGIN_SUBMIT_REQUEST:
				return {
					...state,
					_request: {
						isSending: true,
						success: true
					}
				};
      case LOGIN_SUBMIT_SUCCESS:
				return {
					...state,
					_request: {
						isSending: false,
						success: !!action.result
					},
					isAdmin: !!action.result
				};
      case LOGIN_SUBMIT_ERROR:
				return {
					...state,
					_request: {
						isSending: false,
						success: false
					},
					isAdmin: false
				};
      default:
				return state;
    }
}
