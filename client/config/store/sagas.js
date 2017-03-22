import authSagas from '../../state/auth.sagas';
import adminSagas from '../../state/admin.sagas';
import surveySagas from '../../state/survey.sagas';

export default function* rootSaga() {
  yield [
    ...authSagas,
    ...adminSagas,
    ...surveySagas,
  ];
}
