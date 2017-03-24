var spawn = require('child_process').spawn;
var engine = process.env.NODE_ENV === 'production' ? 'node' : 'nodemon';

spawn(engine, [ __dirname + '/www' ], {
  stdio: 'inherit'
});
