import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="align-middle">
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to survey </Link>
    </div>
  );
};

export default NotFoundPage;
