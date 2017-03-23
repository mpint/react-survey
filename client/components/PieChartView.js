import React, { PropTypes } from 'react';
import { PieChart } from 'react-d3';
import { reduce, zip, chain } from 'lodash';

const PieChartModal = ({title, data}) => {
  const normalizeValue = (value, responseCount) => {
    const totals = calculateResponseTotals(responseCount);
    const normalizedRatio = 1 - ((totals - value) / totals);
    return (100 * normalizedRatio).toFixed(1);
  };

  const convertQuestionDataToChart = ({responses, responseCount}) => (
    chain(responses)
      .zip(responseCount)
      .map((tuple) => ({ label: tuple[0], value: normalizeValue(tuple[1], responseCount)}))
      .value()
  );

  const calculateResponseTotals = (countList) => (
    countList.reduce((out, current) => out + current, 0)
  );

  return (
    <div className="question-chart">
      <h5>{ title }</h5>
      <small className="bump-left">{ `${calculateResponseTotals(data.responseCount)} responses`}</small>
      <PieChart
        data={convertQuestionDataToChart(data)}
        width={400}
        height={400}
        radius={100}
        innerRadius={20}
        sectorBorderColor="white" />
    </div>
  );
};

PieChartModal.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default PieChartModal;
