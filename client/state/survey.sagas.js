import { actions,
	SUBMIT_SURVEY_QUESTION_SAGA
} from './survey.ducks';
import { put, call, take, fork } from 'redux-saga/effects';
import { postSurveyQuestion } from '../requests';

export function* submitSurveySaga(userId, questionId, response) {
	try {
		yield put(actions.submitSurveyQuestionRequest());

		const data = yield call(postSurveyQuestion, userId, questionId, response);

		yield put(actions.submitSurveyQuestionSuccess());

		return data;
	} catch (err) {
		yield put(actions.submitSurveyQuestionError());
	}
}

export function* watchSubmitSurvey() {
	while(true) {
		const { userId, questionId, response } = yield take(SUBMIT_SURVEY_QUESTION_SAGA);

		yield fork(submitSurveySaga, userId, questionId, response);
	}
}

export default [
	watchSubmitSurvey(),
]
