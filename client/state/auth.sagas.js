import { put, take, call } from 'redux-saga/effects';
import { actions,
	APP_LOADED_SAGA,
	LOGIN_SUBMIT_SAGA,
} from './auth.ducks';
import { postLogin } from '../requests';
import guid from 'guid';

export function* emitAppLoaded() {
	yield put(actions.appLoaded());
}

export function* loginSubmitSaga(username, password) {
	try {
		yield put(actions.loginSubmitRequest());

		const result = yield call(postLogin, username, password);

		yield put(actions.loginSubmitSuccess(result));
	} catch (err) {
		yield put(actions.loginSubmitError());
	}
}

export function* watchLoginSubmit(username, password) {
	while(true) {
		const { username, password } = yield take(LOGIN_SUBMIT_SAGA);

		yield call(loginSubmitSaga, username, password);
	}
}

export function* watchAppLoaded(username, password) {
	while(true) {
		yield take(APP_LOADED_SAGA);

		const storedUser = yield localStorage.getItem('appsumo-user');
		if (storedUser) {
			yield put(actions.restoreExistingUser(storedUser));
		} else {
			const newUserId = guid.raw();

			yield localStorage.setItem('appsumo-user', newUserId);

			yield localStorage.setItem('appsumo-questions', JSON.stringify([]));

			yield put(actions.assignNewUserId(newUserId));
		}
	}
}

export default [
	watchLoginSubmit(),
	watchAppLoaded(),
];
