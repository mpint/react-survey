import { surveyModel as initial } from './initialState';

export const APP_LOADED_SAGA = 'AUTH/APP_LOADED_SAGA';

export const actions = {
	appLoaded: () => {
		return { type: APP_LOADED_SAGA };
	},
}

export default function surveyAppState(state = initial, action) {
    switch (action.type) {
      case 'test':

        break;
      default:
				return state;
    }
}
