import React, { PropTypes } from 'react';
import Response from './Response';

const ResponseList = (props) => {
  return (
    <div>
      {props.responses.map((response, i) =>
        <Response
          key={i}
          index={i}
          id={props.id}
          response={response}
          onSelect={props.onSelect}/>
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
