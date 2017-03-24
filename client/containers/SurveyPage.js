import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/survey.ducks';
import SurveyQuestion from '../components/SurveyQuestion';
import { first } from 'lodash';

class SurveyPage extends Component {
  constructor() {
    super();

    this.state = {
      showSurveyQuestion: true
    };
  }

  handleSurveyResponse = (responseIndex, e) => {
    return this.props.actions.selectSurveyResponse(e.target.name, responseIndex);
  }

  handleSubmitSurvey = (e) => {
    this.setState({
      showSurveyQuestion: false
    });

    const {questionId, responseIndex} = this.props.surveyState.currentResponse;
    return this.props.actions.submitSurveyQuestionSaga(this.props.authState.userId, questionId, responseIndex);
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

    const renderNoQuestionsMessage = () => (
      <h3> We're all out of questions for you - Come back later! </h3>
    );

    const question = first(this.props.surveyState.workingQuestionList);
    const selected = this.props.surveyState.currentResponse;

    return (
      <div style={ styles.root } className="survey-page d-flex align-items-center justify-content-around">
          { question ?
            rerenderSurveyQuestion(question, selected) :
            renderNoQuestionsMessage()
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
