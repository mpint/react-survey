import React from 'react';
import { Link } from 'react-router';

const CreditsPage = () => {
  return (
    <div className="credits-page text-center">
      <h2> Brought to you by...</h2>

      <h6>
        A heavily modified version of...
      </h6>
      <h6>
        <Link href="https://github.com/gaearon/react-hot-boilerplate.git">
          React Hot Boilerplate
        </Link>
      </h6>

      <h6> And a lightly modified version of...</h6>
      <h6>
        <Link href="https://github.com/sequelize/express-example">
          Sequelize Express Example
        </Link>
      </h6>

      <h6> And a bunch of other stuff in package.json</h6>

      <h6>
        <Link href="mailto:mpinter09@gmail.com" target="_top">
          Contact me
        </Link>

      </h6>
    </div>
  );
};

export default CreditsPage;
