var express = require('express');
var router = express.Router();
var db = require('../models');

router.post('/', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.sendStatus(422);
  }

  db.User.login(req.body.username, req.body.password)
    .then(function (stored) {
      res.json(stored || false);
    }).catch(function (err) {
      res.sendStatus(500);
    });
});

module.exports = router;
