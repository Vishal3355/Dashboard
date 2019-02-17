import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  {
    timestamp: '2019-02-16T07:14:41+00:00', Power: 2200, Voltage: 3400, Current: 2200,
  },
  {
    timestamp: '2019-02-17T07:14:41+00:00', Power: 1280, Voltage: 2398, Current: 2200,
  },
  {
    timestamp: '2019-02-18T07:14:41+00:00', Power: 5000, Voltage: 4300, Current: 2200,
  },
  {
    timestamp: '2019-02-19T07:14:41+00:00', Power: 4780, Voltage: 2908, Current: 2200,
  },
  {
    timestamp: '2019-02-20T07:14:41+00:00', Power: 5890, Voltage: 4800, Current: 2200,
  },
  {
    timestamp: '2019-02-21T07:14:41+00:00', Power: 4390, Voltage: 3800, Current: 2200,
  },
  {
    timestamp: '2019-02-22T07:14:41+00:00', Power: 4490, Voltage: 4300, Current: 2200,
  },
];

function Dashboard() {
  return (
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="1 1" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Current" stroke="#82cfff" />
        <Line type="monotone" dataKey="Power" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Voltage" stroke="#8884d8" activeDot={{ r: 3 }} />

      </LineChart>
    </ResponsiveContainer>
  );
}

export default Dashboard;
