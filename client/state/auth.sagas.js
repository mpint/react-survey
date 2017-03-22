import { put, take, fork, call } from 'redux-saga/effects';
import { actions,
	APP_LOADED_SAGA
} from './auth.ducks';
export function* emitAppLoaded() {
	return yield put(actions.appLoaded());
}

export default [
	emitAppLoaded()
];
