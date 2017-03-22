import { authModel as initial } from './initialState';

export const APP_LOADED_SAGA = 'AUTH/APP_LOADED_SAGA';

export const actions = {
	appLoaded: () => {
		return { type: APP_LOADED_SAGA };
	},
}

export default function authAppState(state = initial, action) {
    switch (action.type) {
      case APP_LOADED_SAGA:
				return {
					...state,
					loaded: true
				};
      default:
				return state;
    }
}
