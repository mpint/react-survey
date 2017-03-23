import { surveyModel as initial } from './initialState';

export const SELECT_SURVEY_RESPONSE = 'SURVEY/SELECT_SURVEY_RESPONSE';
export const SUBMIT_SURVEY_QUESTION_SAGA = 'SURVEY/SUBMIT_SURVEY_QUESTION_SAGA';
export const SUBMIT_SURVEY_QUESTION_REQUEST = 'SURVEY/SUBMIT_SURVEY_QUESTION_REQUEST';
export const SUBMIT_SURVEY_QUESTION_SUCCESS = 'SURVEY/SUBMIT_SURVEY_QUESTION_SUCCESS';
export const SUBMIT_SURVEY_QUESTION_ERROR = 'SURVEY/SUBMIT_SURVEY_QUESTION_ERROR';

export const CREATE_SURVEY_QUESTION_SAGA = 'SURVEY/CREATE_SURVEY_QUESTION_SAGA';
export const CREATE_SURVEY_QUESTION_REQUEST = 'SURVEY/CREATE_SURVEY_QUESTION_REQUEST';
export const CREATE_SURVEY_QUESTION_SUCCESS = 'SURVEY/CREATE_SURVEY_QUESTION_SUCCESS';
export const CREATE_SURVEY_QUESTION_ERROR = 'SURVEY/CREATE_SURVEY_QUESTION_ERROR';

export const GET_SURVEY_QUESTIONS_SAGA = 'SURVEY/GET_SURVEY_QUESTIONS_SAGA';
export const GET_SURVEY_QUESTIONS_REQUEST = 'SURVEY/GET_SURVEY_QUESTIONS_REQUEST';
export const GET_SURVEY_QUESTIONS_SUCCESS = 'SURVEY/GET_SURVEY_QUESTIONS_SUCCESS';
export const GET_SURVEY_QUESTIONS_ERROR = 'SURVEY/GET_SURVEY_QUESTIONS_ERROR';

export const actions = {
	selectSurveyResponse: (id, response) => ({ type: SELECT_SURVEY_RESPONSE, id, response }),
	submitSurveyQuestionSaga: (userId, questionId, response) => ({ type: SUBMIT_SURVEY_QUESTION_SAGA, userId, questionId, response }),
	submitSurveyQuestionRequest: () => ({ type: SUBMIT_SURVEY_QUESTION_REQUEST }),
	submitSurveyQuestionSuccess: () => ({ type: SUBMIT_SURVEY_QUESTION_SUCCESS }),
	submitSurveyQuestionError: () => ({ type: SUBMIT_SURVEY_QUESTION_ERROR }),
	createSurveyQuestionSaga: (question, responses) => ({ type: CREATE_SURVEY_QUESTION_SAGA, question, responses }),
	createSurveyQuestionRequest: () => ({ type: CREATE_SURVEY_QUESTION_REQUEST }),
	createSurveyQuestionSuccess: () => ({ type: CREATE_SURVEY_QUESTION_SUCCESS }),
	createSurveyQuestionError: () => ({ type: CREATE_SURVEY_QUESTION_ERROR }),
	getSurveyQuestionsSaga: (question, responses) => ({ type: GET_SURVEY_QUESTIONS_SAGA, question, responses }),
	getSurveyQuestionsRequest: () => ({ type: GET_SURVEY_QUESTIONS_REQUEST }),
	getSurveyQuestionsSuccess: (questionList, answeredQuestions) => ({ type: GET_SURVEY_QUESTIONS_SUCCESS, questionList, answeredQuestions }),
	getSurveyQuestionsError: () => ({ type: GET_SURVEY_QUESTIONS_ERROR }),
};

export default function surveyAppState(state = initial, action) {
    switch (action.type) {
      case SELECT_SURVEY_RESPONSE:
				return {
					...state,
					currentResponse: {
						questionId: action.id,
						response: action.response
					}
				};
      case SUBMIT_SURVEY_QUESTION_REQUEST:
				return {
					...state,
					_request: {
						isSending: true,
						success: true
					}
				};
      case SUBMIT_SURVEY_QUESTION_SUCCESS:
				return {
					...state,
					_request: {
						isSending: false,
						success: true
					},
					workingQuestionList: [
						...state.workingQuestionList.slice(1)
					],
					currentResponse: initial.currentResponse
				};
      case SUBMIT_SURVEY_QUESTION_ERROR:
				return {
					...state,
					_request: {
						isSending: false,
						success: false
					}
				};
			case CREATE_SURVEY_QUESTION_REQUEST:
				return {
					...state,
					_request: {
						isSending: true,
						success: true
					}
				};
			case CREATE_SURVEY_QUESTION_SUCCESS:
				return {
					...state,
					_request: {
						isSending: false,
						success: true
					}
				};
			case CREATE_SURVEY_QUESTION_ERROR:
				return {
					...state,
					_request: {
						isSending: false,
						success: false
					},
				};
			case GET_SURVEY_QUESTIONS_REQUEST:
				return {
					...state,
					_request: {
						isSending: true,
						success: true
					}
				};
			case GET_SURVEY_QUESTIONS_SUCCESS:
				return {
					...state,
					_request: {
						isSending: false,
						success: true
					},
					pristineQuestionList: [ ...action.questionList ],
					workingQuestionList: action.questionList.filter((q) => !action.answeredQuestions.includes(q.id))
				};
			case GET_SURVEY_QUESTIONS_ERROR:
				return {
					...state,
					_request: {
						isSending: false,
						success: false
					},
				};
      default:
				return state;
    }
}
