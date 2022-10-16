import React from 'react';
import PropTypes from 'prop-types';

import { DateTime } from 'luxon';

import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip,
} from 'recharts';

const timeFormatter = (date) => {
  if (typeof date !== 'number') {
    return date;
  }

  if (date === 0) {
    return date;
  }

  return DateTime.fromSeconds(date)
    .toFormat('HH:mm');
};

const powerFormatter = (power) => `${power} MW`;

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
        <XAxis dataKey="time" scale="time" tickFormatter={timeFormatter} interval={11} />
        <YAxis tickFormatter={powerFormatter} />
        <Tooltip />
        <Line type="monotone" dataKey="power" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

PowerTimeSeriesLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      power: PropTypes.number,
    }),
  ).isRequired,
};

export default PowerTimeSeriesLineChart;
