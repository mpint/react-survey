import { combineReducers } from 'redux';

import authAppState from '../../state/auth.ducks';
import adminAppState from '../../state/admin.ducks';
import surveyAppState from '../../state/survey.ducks';

const rootDuck = combineReducers({
  authAppState,
  adminAppState,
  surveyAppState
});

export default rootDuck;
