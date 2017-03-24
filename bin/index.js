var spawn = require('child_process').spawn;
var env = process.env.NODE_ENV || 'development';
var engine = env === 'production' ? 'node' : 'nodemon';

spawn(engine, [ __dirname + '/www' ], {
  stdio: 'inherit',
  NODE_ENV: env,
  DATABASE_URL: process.env.DATABASE_URL || null
});
