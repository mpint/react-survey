import axios from 'axios';

export function postSurveyQuestion(userId, questionId, response) {
  console.log('yeyeuserId, questionId, response', userId, questionId, response);
  console.log('`/api/question/${questionId}`', `/api/question/${questionId}`);

  return axios.put(
    `/api/question/${questionId}`,
    { userId, response },
    { responseType: 'json' }
  )
  .then(({ data }) => data.response);
}
