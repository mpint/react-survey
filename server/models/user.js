"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      login: function(username, password) {
        return User.findOne({
          where: {
            username: username,
            password: password
          }
        })
        .then(function(stored) {
          return stored ? {
            username: stored.get('username'),
            password: stored.get('password'),
          } : null;
        });
      }
    }
  });

  return User;
};
