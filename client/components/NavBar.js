import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavBar = (props, context) => {
  const renderAdminMenu = () => (
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item bump-right">
          <button
            type="button"
            className="btn btn-secondary btn-sm">
            <Link className="nav-link" to={`/admin/${context.config.pages.admin.create.slug}` }>
              { context.config.pages.admin.create.title }
            </Link>
          </button>

        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn btn-secondary btn-sm">
              <Link className="nav-link" to={`/admin/${context.config.pages.admin.list.slug}` }>
                { context.config.pages.admin.list.title }
              </Link>
          </button>
        </li>
      </ul>
    </div>
  );

  const renderDropdownMenu = () => (
    <div className="collapse navbar-collapse" id="navbarTarget">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown">Menu</a>
          <div className="dropdown-menu">
            <Link className="nav-link" to={context.config.pages.admin.root.slug }>
              { context.config.pages.admin.root.title }
            </Link>
            <Link className="nav-link" to="https://www.linkedin.com/in/pintermichael">
              Credits
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-toggleable-md fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTarget">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to={context.config.pages.rootSlug }>
        { context.config.main.appName }
      </Link>
      { props.showAdminMenu && renderAdminMenu() }
      { renderDropdownMenu()}
    </nav>
  );
};


NavBar.propTypes = {
  showAdminMenu: PropTypes.bool.isRequired
};

NavBar.contextTypes = {config: PropTypes.object};

export default NavBar;
