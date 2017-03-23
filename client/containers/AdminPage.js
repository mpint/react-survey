import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/auth.ducks';
import LoginForm from '../components/LoginForm';

class AdminPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="admin-page container">
        {this.props.authState.isAdmin ?
          this.props.children :
          <LoginForm
            submit={this.props.actions.loginSubmitSaga}/>
        }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    authState: state.authAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
