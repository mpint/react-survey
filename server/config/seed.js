module.exports = {
  User: {
    seed: true,
    content: [{
      username: 'admin',
      password: 'admin'
    }]
  },
  Question: {
    seed: true,
    content: [
      {
        title: 'Overall, how satisfied or dissatisfied are you with our app?',
        responses: [ 'not very', 'sort of', 'its alright', 'not that impressed', 'very nice' ],
        responseCount: [3, 3, 3, 2, 6]
      },
      {
        title: 'Which word would you use to describe this product?',
        responses: [ 'cabbage', 'tomato', 'canteloupe', 'virginia' ],
        responseCount: [1, 6, 2, 1]
      },
      {
        title: 'How would you rate the value for money of the product?',
        responses: [ 'wow', 'good bang for your buck', 'somewhere in the middle' ],
        responseCount: [1, 4, 1]
      }
    ]
  },
}
