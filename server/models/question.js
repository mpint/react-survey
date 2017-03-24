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
        return responses ? JSON.parse(responses) : responses;
      }
    },
    responseCount: {
      type: DataTypes.STRING,
      set: function(val) {
        var stringified = JSON.stringify(val);
        this.setDataValue('responseCount', stringified);
      },
      get: function(val) {
        var count = this.getDataValue('responseCount');
        return JSON.parse(count);
      }
    }
  }, {
    classMethods: {
      make: function (question, responses) {
        return Question.create({
          title: question,
          responses: responses,
          responseCount: Question.build().fillResponseCounts(responses)
        })
        .then(function(stored) {
          return stored;
        });
      },
      getAll: function() {
        return Question.findAll({
          order: '"createdAt" DESC'
        })
        .then(function(stored) {
          return stored.map(function (q) {
            return {
              id: q.get('id'),
              title: q.get('title'),
              responses: q.get('responses'),
              responseCount: q.get('responseCount')
            };
          });
        });
      },
      tickResponse: function(questionId, responseIndex) {
        return Question.find(
          { where: { id: questionId } }
        )
        .then(function (stored) {
          return Question.update(
            {
              responseCount: Question.build().incrementIndex(stored.get('responseCount'), responseIndex)
            },
            { where: { id: questionId } }
          )
          .then(function (res) {
            return res;
          });
        });
      }
    },
    instanceMethods: {
      fillResponseCounts: function (responses) {
        return Array(responses.length).fill(0);
      },
      incrementIndex: function (currentList, i) {
        var incrementTarget = currentList[i];
        return [].concat(
          currentList.slice(0, i),
          incrementTarget + 1,
          currentList.slice(i + 1)
        );
      }
    }
  });

  return Question;
};
