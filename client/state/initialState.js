export const statusProps = {
  isSending: Boolean(),
  success: Number(Infinity),
};

export const authModel = {
  _request: statusProps,
  loaded: false,
  userId: String(),
  isAdmin: Boolean(),
};

export const surveyModel = {
  _request: statusProps,
  currentResponse: {
    questionId: String(),
    responseIndex: Number(),
    response: String()
  },
  workingQuestionList: Array(),
  pristineQuestionList: Array()
};
