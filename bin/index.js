var spawn = require('child_process').spawn;

var options = {
  stdio: 'inherit'
};

spawn('nodemon', [ __dirname + '/www' ], {
  stdio: 'inherit'
});
