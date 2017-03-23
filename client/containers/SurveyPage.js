import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/survey.ducks';
import SurveyQuestion from '../components/SurveyQuestion';
import { first } from 'lodash';

class SurveyPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showSurveyQuestion: true
    };
  }

  handleSurveyResponse = (e) => {
    return this.props.actions.selectSurveyResponse(e.target.name, e.target.value);
  }

  handleSubmitSurvey = (e) => {
    this.setState({
      showSurveyQuestion: false
    });

    const {questionId, response} = this.props.surveyState.currentResponse;
    return this.props.actions.submitSurveyQuestionSaga(this.props.authState.userId, questionId, response);
  }

  render() {
    var styles = {
      root: {
        width: window.innerWidth,
        height: window.outerHeight - 55
      }
    };

    const rerenderSurveyQuestion = ({id, title, responses}, selected) => {
      if (!this.state.showSurveyQuestion) {
        setTimeout(() => {
          this.setState({
            showSurveyQuestion: true
          });
        }, 500);
      }

      return (
        this.state.showSurveyQuestion ?
          <SurveyQuestion
            id={id}
            title={title}
            responses={responses}
            selected={selected}
            onSelect={this.handleSurveyResponse}
            onSubmit={this.handleSubmitSurvey} /> :
          <div></div>
      );
    };

    const question = first(this.props.surveyState.questionList);
    const selected = this.props.surveyState.currentResponse;

    return (
      <div style={ styles.root } className="survey-page d-flex align-items-center justify-content-around">
          { question ?
            rerenderSurveyQuestion(question, selected) :
            <h1> No more questions left! </h1>
          }
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    authState: state.authAppState,
    surveyState: state.surveyAppState
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
)(SurveyPage);
