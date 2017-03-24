var express = require('express');
var router = express.Router();
var db = require('../models');
/* GET question listing. */
router.get('/', function (req, res, next) {
  db.Question.getAll()
    .then(function (questionList) {
      res.json(questionList);
    }).catch(function (err) {
      res.sendStatus(500);
    })
});

router.post('/', function (req, res, next) {
  if (!req.body.question || !req.body.responses) {
    return res.sendStatus(422);
  }

  db.Question.make(req.body.question, req.body.responses)
    .then(function (updated) {
      res.json(updated);
    }).catch(function (err) {
      res.sendStatus(500);
    });
});

router.put('/:id', function (req, res, next) {
  // ~ converts -1 to 0 and 0 to -1, i.e. truthy
  if (!req.params.id || !~req.body.responseIndex) {
    return res.sendStatus(422);
  }

  db.Question.tickResponse(req.params.id, req.body.responseIndex)
    .then(function (updated) {
      res.json(updated);
    }).catch(function (err) {
      res.sendStatus(500);
    });
});

module.exports = router;
