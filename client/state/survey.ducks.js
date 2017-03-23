import { surveyModel as initial } from './initialState';

export const SELECT_SURVEY_RESPONSE = 'SURVEY/SELECT_SURVEY_RESPONSE';

export const SUBMIT_SURVEY_QUESTION_SAGA = 'SURVEY/SUBMIT_SURVEY_QUESTION_SAGA';
export const SUBMIT_SURVEY_QUESTION_REQUEST = 'SURVEY/SUBMIT_SURVEY_QUESTION_REQUEST';
export const SUBMIT_SURVEY_QUESTION_SUCCESS = 'SURVEY/SUBMIT_SURVEY_QUESTION_SUCCESS';
export const SUBMIT_SURVEY_QUESTION_ERROR = 'SURVEY/SUBMIT_SURVEY_QUESTION_ERROR';

export const actions = {
	selectSurveyResponse: (id, response) => ({ type: SELECT_SURVEY_RESPONSE, id, response }),
	submitSurveyQuestionSaga: (userId, questionId, response) => ({ type: SUBMIT_SURVEY_QUESTION_SAGA, userId, questionId, response }),
	submitSurveyQuestionRequest: () => ({ type: SUBMIT_SURVEY_QUESTION_REQUEST }),
	submitSurveyQuestionSuccess: () => ({ type: SUBMIT_SURVEY_QUESTION_SUCCESS }),
	submitSurveyQuestionError: () => ({ type: SUBMIT_SURVEY_QUESTION_ERROR }),
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
						success: false
					}
				};
      case SUBMIT_SURVEY_QUESTION_ERROR:
				return {
					...state,
					_request: {
						isSending: false,
						success: true
					},
					questionList: [
						...state.questionList.slice(1)
					],
					currentResponse: initial.currentResponse
				};
      default:
				return state;
    }
}
