import React, { useState, useEffect } from 'react';
import { processLargeDataset } from '../utils/dataProcessing';

const ChartComponent = ({ data }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Performance bottleneck: processing large dataset on every render
    const processedData = processLargeDataset(data);
    
    // Another issue: nested loops without memoization
    data.forEach(item => {
      item.metrics.forEach(metric => {
        metric.value = metric.value * 100; // Transform for display
      });
    });
    
    setChartData(processedData);
    setLoading(false);
  }, [data]);

  if (loading) {
    return <div>Loading chart...</div>;
  }

  return (
    <div className="chart-container">
      {/* Render chart with chartData */}
    </div>
  );
};

export default ChartComponent;