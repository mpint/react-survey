export const statusProps = {
  isSending: Boolean(),
  success: Number(Infinity)
};

export const authModel = {
  _request: statusProps,
  loaded: false,
  userId: String(),
};

export const adminModel = {
  yo: 'ho'
};

export const surveyModel = {
  _request: statusProps,
  currentResponse: {
    questionId: String(),
    response: String()
  },
  questionList: [
    {
      id: '1241',
      title: 'what is life? is it all worth living?',
      responses: [ 'something', 'nothing', 'everything' ]
    },
    {
      id: '1412',
      title: 'is it working?',
      responses: [ 'yes', 'no', 'maybe' ]
    }
  ]
};
