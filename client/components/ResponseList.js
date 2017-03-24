import React, { PropTypes } from 'react';
import Response from './Response';

const ResponseList = (props) => {
  return (
    <div>
      {props.responses.map((response, responseIndex) =>
        <Response
          key={responseIndex}
          index={responseIndex}
          id={props.id}
          response={response}
          onSelect={props.onSelect.bind(this, responseIndex)}/>
      )}
    </div>
  );
};

ResponseList.propTypes = {
  id: PropTypes.string.isRequired,
  responses: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ResponseList;
