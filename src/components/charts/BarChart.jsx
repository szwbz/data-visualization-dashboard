import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * BarChart component for displaying bar chart visualizations
 * @param {Object} props - Component props
 * @param {Array} props.data - Data array for the chart
 * @param {string} props.dataKey - Key for the data values
 * @param {string} props.xAxisKey - Key for the x-axis labels
 * @param {string} props.title - Chart title
 */
const BarChartComponent = ({ data, dataKey, xAxisKey, title }) => {
  return (
    <div className="bar-chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;