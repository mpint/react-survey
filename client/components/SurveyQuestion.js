import React, { PropTypes } from 'react';

import QuestionTitle from './QuestionTitle';
import ResponseList from './ResponseList';
import { isNumber } from 'lodash';

const SurveyQuestion = (props) => {
  return (
    <div className="survey-question">
      <QuestionTitle title={props.title}/>

      <ResponseList
        id={props.id}
        responses={props.responses}
        onSelect={props.onSelect}/>

      <button
        disabled={!isNumber(props.selected.responseIndex)}
        type="button"
        className="btn btn-primary btn-lg"
        onClick={props.onSubmit}>
          Answer
      </button>
    </div>
  );
};

SurveyQuestion.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  responses: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SurveyQuestion;
