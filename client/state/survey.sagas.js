import { APP_LOADED_SAGA } from './auth.ducks';
import { actions,
	SUBMIT_SURVEY_QUESTION_SAGA
} from './survey.ducks';
import { put, call, take, fork } from 'redux-saga/effects';
import { postSurveyQuestion, getSurveyQuestions } from '../requests';

export function* submitSurveySaga(userId, questionId, response) {
	try {
		yield put(actions.submitSurveyQuestionRequest());

		yield call(postSurveyQuestion, userId, questionId, response);

		yield put(actions.submitSurveyQuestionSuccess());
	} catch (err) {
		yield put(actions.submitSurveyQuestionError());
	}
}

export function* getSurveyQuestionsSaga(answeredQuestions) {
	try {
		yield put(actions.getSurveyQuestionsRequest());

		const data = yield call(getSurveyQuestions);

		yield put(actions.getSurveyQuestionsSuccess(data, answeredQuestions));
	} catch (err) {
		yield put(actions.getSurveyQuestionsError());
	}
}

export function* updateSurveyLocalState(questionId) {
	const answeredQuestions = yield localStorage.getItem('appsumo-questions');

	const parsedQuestions = yield JSON.parse(answeredQuestions);

	const updatedQuestions = yield [ ...parsedQuestions, questionId ];

	const serializedQuestions = yield JSON.stringify(updatedQuestions);

	yield localStorage.setItem('appsumo-questions', serializedQuestions);
}

export function* watchSubmitSurvey() {
	while(true) {
		const { userId, questionId, response } = yield take(SUBMIT_SURVEY_QUESTION_SAGA);

		yield fork(submitSurveySaga, userId, questionId, response);

		yield fork(updateSurveyLocalState, questionId);
	}
}

export function* watchAppLoaded() {
	while(true) {
		yield take(APP_LOADED_SAGA);

		const answeredQuestions = yield localStorage.getItem('appsumo-questions');

		yield call(getSurveyQuestionsSaga, JSON.parse(answeredQuestions));
	}
}

export default [
	watchSubmitSurvey(),
	watchAppLoaded(),
]
