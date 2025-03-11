import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './bar-chart.css';

interface DataItem {
  name: string;
  value: number;
}

interface BarChartComponentProps {
  data: DataItem[];
  color?: string;
  height?: number;
  width?: number;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
  data,
  color = '#9AD0DA',
  height = 300,
  width = 40,
}) => {
  return (
    <div className="bar-chart-container">
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={color} barSize={width} />
        </BarChart>
      </ResponsiveContainer>{' '}
    </div>
  );
};

export default BarChartComponent;
