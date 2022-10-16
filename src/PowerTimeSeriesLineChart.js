import React from 'react';
import PropTypes from 'prop-types';

import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip,
} from 'recharts';

function PowerTimeSeriesLineChart(props) {
  const { data } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="power" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

PowerTimeSeriesLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      power: PropTypes.number,
    }),
  ).isRequired,
};

export default PowerTimeSeriesLineChart;
