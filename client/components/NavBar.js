import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavBar = (props, context) => {
  return (
    <nav className="navbar navbar-toggleable-md fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTarget">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href={ context.config.pages.appRoot }>
        { context.config.main.appName }
      </a>

      <div className="collapse navbar-collapse" id="navbarTarget">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown">Menu</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/admin">Login</a>
              <a className="dropdown-item" href="https://github.com/mpint/">Github</a>
              <a className="dropdown-item" href="https://www.linkedin.com/in/pintermichael/">Credits</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.contextTypes = {config: React.PropTypes.object};

export default NavBar;
