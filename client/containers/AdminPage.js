import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as authActions } from '../state/auth.ducks';
import { actions as surveyActions } from '../state/survey.ducks';
import LoginForm from '../components/LoginForm';

class AdminPage extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.actions.getSurveyQuestionsSaga();
  }

  render() {
    return (
      <div className="admin-page container">
        {this.props.authState.isAdmin ?
          this.props.children :
          <LoginForm
            status={this.props.authState._request}
            submit={this.props.actions.loginSubmitSaga}/>
        }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    authState: state.authAppState,
    surveyState: state.surveyAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...authActions,
      ...surveyActions
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
