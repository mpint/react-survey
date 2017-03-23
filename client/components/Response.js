import React, { PropTypes } from 'react';

const Response = ({index, id, response, onSelect}) => {
  return (
    <div className="input-group response">
      <span className="input-group-addon">
        <input
          type="radio"
          name={id}
          value={response}
          onClick={onSelect}/>
      </span>
      <input disabled
        type="text"
        className="form-control"
        value={`${index}. ${response}`}/>
    </div>
  );
}

Response.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Response;
