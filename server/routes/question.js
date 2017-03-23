var express = require('express');
var router = express.Router();

/* GET question listing. */
router.get('/', function (req, res, next) {
  res.json([
      {
        id: '1241',
        title: 'what is life? is it all worth living?',
        responses: [ 'something', 'nothing', 'everything' ],
        responseCount: [3, 3, 3]
      },
      {
        id: '1412',
        title: 'is it working?',
        responses: [ 'yes', 'no', 'maybe' ],
        responseCount: [6, 6, 2]
      }
    ]);
});

router.post('/', function (req, res, next) {
  console.log('req.body', req.body);
  res.send('hi');
});

router.put('/:id', function (req, res, next) {
  console.log('req.params', req.params);
  console.log('req.body', req.body);
  res.send('hi');
});

module.exports = router;
