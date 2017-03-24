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
        title: 'what is life? is it all worth living?',
        responses: [ 'something', 'nothing', 'everything' ],
        responseCount: [3, 3, 3]
      },
      {
        title: 'is it working?',
        responses: [ 'yes', 'no', 'maybe' ],
        responseCount: [6, 6, 2]
      }
    ]
  },
}
