import { APP_LOADED_SAGA } from './auth.ducks';
import { actions,
	SUBMIT_SURVEY_QUESTION_SAGA,
	CREATE_SURVEY_QUESTION_SAGA,
	GET_SURVEY_QUESTIONS_SAGA
} from './survey.ducks';
import { put, call, take, fork } from 'redux-saga/effects';
import { postSurveyQuestion, putSurveyQuestion, getSurveyQuestions } from '../requests';

export function* submitSurveySaga(userId, questionId, responseIndex) {
	try {
		yield put(actions.submitSurveyQuestionRequest());

		yield call(putSurveyQuestion, userId, questionId, responseIndex);

		yield put(actions.submitSurveyQuestionSuccess());
	} catch (err) {
		yield put(actions.submitSurveyQuestionError());
	}
}

export function* createSurveySaga(question, responses) {
	try {
		yield put(actions.createSurveyQuestionRequest());

		yield call(postSurveyQuestion, question, responses);

		yield put(actions.createSurveyQuestionSuccess());
	} catch (err) {
		yield put(actions.createSurveyQuestionError());
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
		const { userId, questionId, responseIndex } = yield take(SUBMIT_SURVEY_QUESTION_SAGA);

		yield fork(submitSurveySaga, userId, questionId, responseIndex);

		yield fork(updateSurveyLocalState, questionId);
	}
}

export function* watchGetSurveyQuestions() {
	while(true) {
		yield take(GET_SURVEY_QUESTIONS_SAGA);

		const answeredQuestions = yield localStorage.getItem('appsumo-questions');

		yield call(getSurveyQuestionsSaga, JSON.parse(answeredQuestions));
	}
}

export function* watchCreateSurveyQuestion() {
	while(true) {
		const { question, responses } = yield take(CREATE_SURVEY_QUESTION_SAGA);

		const answeredQuestions = yield localStorage.getItem('appsumo-questions');

		yield call(createSurveySaga, question, responses);

		yield call(getSurveyQuestionsSaga, JSON.parse(answeredQuestions));
	}
}

export function* watchAppLoaded() {
	while(true) {
		yield take(APP_LOADED_SAGA);

		yield put(actions.getSurveyQuestionsSaga());
	}
}

export default [
	watchGetSurveyQuestions(),
	watchSubmitSurvey(),
	watchCreateSurveyQuestion(),
	watchAppLoaded(),
]
