'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var dbSeed = require(path.join(__dirname, '..', 'config', 'seed'));

Sequelize.Promise.longStackTraces();

var db = {}, sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }

  syncModelToDb(modelName);
});

function syncModelToDb(modelName) {
  return db[modelName].sync({force: true})
    .then(function () {
      if (dbSeed[modelName] && dbSeed[modelName].seed) {
        dbSeed[modelName].content.forEach(function(row) {
          db[modelName].create(row);
        });
      }
    });
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
