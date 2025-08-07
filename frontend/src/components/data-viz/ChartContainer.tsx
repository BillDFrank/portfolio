'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartContainerProps {
  data: any[];
  title: string;
}

export const ChartContainer = ({ data, title }: ChartContainerProps) => {
  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold text-text-accent">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--secondary-gray)" />
          <XAxis dataKey="name" stroke="var(--text-secondary)" />
          <YAxis stroke="var(--text-secondary)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--primary-gray)',
              borderColor: 'var(--secondary-gray)',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--accent-blue)"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};