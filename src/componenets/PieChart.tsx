// src/components/PieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

interface PieChartProps {
  data: ChartData<'pie'>;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => (
  <div style={{ maxWidth: 300 }}>
    <Pie data={data} />
  </div>
);

export default PieChart;
