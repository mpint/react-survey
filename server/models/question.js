"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    title: DataTypes.STRING,
    responses: {
      type: DataTypes.STRING,
      set: function(val) {
        this.setDataValue('responses', JSON.stringify(val));
      },
      get: function(val) {
        var responses = this.getDataValue('responses');
        return JSON.parse(responses);
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Question.hasMany(models.User);
      }
    }
  });

  Question.seed = true;
  return Question;
};
