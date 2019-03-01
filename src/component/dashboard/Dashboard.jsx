import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import { Line } from 'react-chartjs-2';
const datasetDefault = {
  label: 'My First dataset',
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
}

function Dashboard(props) {
  const { data, labels } = props;
  const passingObject = {};
  passingObject.labels = labels;
  const dataset = data.map(element => {
    const mergeData = merge(datasetDefault, element);
    return mergeData;
  });
  passingObject.datasets = dataset;
  return (
    <ResponsiveContainer width="99%" height={320}>
      <Line data={passingObject} />
    </ResponsiveContainer>
  );
}

Dashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  labels: PropTypes.array.isRequired,
};

export default Dashboard;
