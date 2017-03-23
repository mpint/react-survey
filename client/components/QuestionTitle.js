import React, { PropTypes } from 'react';

const QuestionTitle = ({title}) => {
  return (
    <h1 className="question-title">
      {title}
    </h1>
  );
};

QuestionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default QuestionTitle;
