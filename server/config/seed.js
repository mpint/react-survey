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
    content: [{
      question: 'what is life? is it all worth living?',
      responses: [ 'something', 'nothing', 'everything' ]
    },
    {
      question: 'is it working?',
      responses: [ 'yes', 'no', 'maybe' ]
    }]
  },
}
