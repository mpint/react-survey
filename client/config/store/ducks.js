import { combineReducers } from 'redux';

import authAppState from '../../state/auth.ducks';
import surveyAppState from '../../state/survey.ducks';

const rootDuck = combineReducers({
  authAppState,
  surveyAppState
});

export default rootDuck;
