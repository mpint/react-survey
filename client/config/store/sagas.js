import authSagas, { emitAppLoaded } from '../../state/auth.sagas';
import surveySagas from '../../state/survey.sagas';

export default function* rootSaga() {
  yield [
    ...authSagas,
    ...surveySagas,
    emitAppLoaded()
  ];
}
