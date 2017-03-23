import axios from 'axios';

export function postSurveyQuestion(userId, questionId, response) {
  return axios.put(
    `/api/question/${questionId}`,
    { userId, response },
    { responseType: 'json' }
  )
  .then(({data}) => data);
}
export function postLogin(username, password) {
  return axios.post(
    `/api/user`,
    { username, password },
    { responseType: 'json' }
  )
  .then(({data}) => data);
}

export function getSurveyQuestions(username, password) {
  return axios.get(
    `/api/question`,
    { responseType: 'json' }
  )
  .then(({data}) => data);
}
