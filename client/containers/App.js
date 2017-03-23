import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from '../components/NavBar';
import config from '../config';

class App extends Component {
  getChildContext = () =>  {
    return { config };
  }

  render() {
    return (
      <div>
        <NavBar showAdminMenu={this.props.authState.isAdmin}/>
        { this.props.children }
      </div>
    );
  }
}

App.childContextTypes = {
  config: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authState: state.authAppState
  };
}
export default connect(
  mapStateToProps
)(App);
