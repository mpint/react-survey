import axios from 'axios';

export function putSurveyQuestion(userId, questionId, responseIndex) {
  return axios.put(
    `/api/question/${questionId}`,
    { userId, responseIndex },
    { responseType: 'json' }
  )
  .then(({data}) => data);
}

export function postSurveyQuestion(question, responses) {
  return axios.post(
    `/api/question`,
    { question, responses },
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
