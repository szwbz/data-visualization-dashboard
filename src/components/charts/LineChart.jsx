import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * LineChart component for displaying line chart visualizations
 * @param {Object} props - Component props
 * @param {Array} props.data - Data array for the chart
 * @param {string} props.dataKey - Key for the data values
 * @param {string} props.xAxisKey - Key for the x-axis labels
 * @param {string} props.title - Chart title
 * @param {string} props.lineColor - Color for the line
 */
const LineChartComponent = ({ data, dataKey, xAxisKey, title, lineColor = '#82ca9d' }) => {
  return (
    <div className="line-chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={lineColor} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;