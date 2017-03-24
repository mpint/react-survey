import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../state/auth.ducks';
import PieChartView from '../components/PieChartView';

class AdminListPage extends Component {
  constructor() {
    super();

    this.state = {
      showChart: false,
      selectedQuestion: {}
    };
  }

  calculateResponseTotals = (countList) => (
    countList.reduce((out, current) => out + current, 0)
  )

  openChartView = (index) => {
    const question = this.props.surveyState.pristineQuestionList[index];
    this.setState({
      showChart: true,
      selectedQuestion: {
        title: question.title,
        data: {
          responses: question.responses,
          responseCount: question.responseCount
        }
      }
    });
  }

  closeChartView = () => {
    this.setState({
      showChart: false,
      selectedQuestion: {}
    });
  }

  render() {
    const { pristineQuestionList } = this.props.surveyState;

    const listItem = (question, index) => (
      <li key={ index } className="list-group-item">
        { question.title }
        <div className="ml-auto">
          <span className="badge badge-default badge-pill bump-right">{this.calculateResponseTotals(question.responseCount)}</span>
          <span className="badge badge-primary badge-pill" onClick={ this.openChartView.bind(this, index) }> View </span>
        </div>
      </li>
    );

    const noItemsToList = () => (
      <li className="list-group-item d-flex justify-content-center">
        <small>
          Add some survey questions to get started!
        </small>
      </li>
    );

    const renderChartView = ({ title, data }) => (
      <div className="d-flex justify-content-center align-items-center">
        <PieChartView
          title={title}
          data={data}/>
      </div>
    );

    const renderChartPlaceholder = () => (
      <div className="d-flex chart-placeholder justify-content-center align-items-center">
        <small> click View to visualize survey results </small>
      </div>
    );

    return (
      <div className="admin-list-page">
        { this.state.showChart ?
          renderChartView(this.state.selectedQuestion) :
          renderChartPlaceholder()
        }
        <ul className="list-group">
          { pristineQuestionList.length ?
              pristineQuestionList.map(listItem) :
              noItemsToList()
          }
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
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
)(AdminListPage);
