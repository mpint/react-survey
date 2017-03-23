var express = require('express');
var router = express.Router();

/* GET question listing. */
router.get('/', function (req, res, next) {
  res.send('hi');
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
