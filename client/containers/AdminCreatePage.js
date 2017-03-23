
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/auth.ducks';
import { compact } from 'lodash';
class AdminCreatePage extends Component {
  constructor() {
    super();
    this.initialState = {
      question: '',
      responseList: []
    };

    this.state = {
      ...this.initialState
    };
  }

  resetState = () => {
    this.setState(this.initialState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.resetState();
    const validResponses = compact(this.state.responseList);
    this.props.actions.createSurveyQuestionSaga(this.state.question, validResponses);
  }

  addResponse = () => {
    this.setState({
      responseList: [
        ...this.state.responseList, ''
      ]
    })
  }

  updateResponse = (index, e) => {
    this.setState({
      responseList: [
        ...this.state.responseList.slice(0, index),
        e.target.value,
        ...this.state.responseList.slice(index + 1),
      ]
    });
  }

  updateQuestion = (e) => {
    this.setState({
      question: e.target.value
    });
  }


  render() {
    const renderResponseList = (list) => {
      return list.length ?
        list.map((response, index, list) => {
          return index === list.length - 1 ?
            renderLastResponse(index, response) :
            renderResponse(index, response);
        }) :
        renderLastResponse(0, '');
    }

    const renderResponse = (index, response) => (
      <div key={index} className="question-response">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            {`A${ index + 1 }`}
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="enter a desired response here"
            onChange={this.updateResponse.bind(this, index)}
            value={response}/>
        </div>
      </div>
    );

      const renderLastResponse = (index, response) => (
      <div key={index} style={{ marginLeft: -35 }} className="question-response">
        <div className="input-group">
          <span onClick={this.addResponse} className="input-group-addon pointer">+</span>
          <span className="input-group-addon">
            {`A${ index + 1 }`}
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="enter a desired response here"
            onChange={this.updateResponse.bind(this, index)}
            value={response}/>
        </div>
      </div>
    );

    return (
      <div className="admin-create-page">
        <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
        <button onClick={this.resetState} className="btn btn-default bump-right">Reset</button>

        <div className="question-content">
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Q</span>
            <input
              type="text"
              className="form-control"
              placeholder="enter your survey question here"
              value={this.state.question}
              onChange={this.updateQuestion} />
          </div>
        </div>

        {renderResponseList(this.state.responseList)}
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
)(AdminCreatePage);
