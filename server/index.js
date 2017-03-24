var fs = require('fs');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var webpack = require('webpack');
var config = require('../webpack.config');

var app = express();

// webpack/client setup
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath || '/',
  noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// dynamically create routes
fs.readdirSync(path.join(__dirname, 'routes'))
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function (file) {
    var route = file.split('.')[0];
    app.use('/api/' + route, require(path.join(__dirname, 'routes', route)));
  });

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log('err', err);
  });
}


module.exports = app;
