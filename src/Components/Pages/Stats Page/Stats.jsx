import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = {
  Calls: '#0088FE',
  SMS: '#00C49F',
  Video: '#FFBB28',
};

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('timeline') || '[]');

    // Count each action type using the same keywords from AddDetails.jsx
    const counts = { Calls: 0, SMS: 0, Video: 0 };

    stored.forEach(entry => {
      if (entry.action.includes('Called')) counts.Calls += 1;
      else if (entry.action.includes('message')) counts.SMS += 1;
      else if (entry.action.includes('Video')) counts.Video += 1;
    });

    // Only include types that have at least 1 entry
    const chartData = Object.entries(counts)
      .filter(([, value]) => value > 0)
      .map(([name, value]) => ({ name, value, fill: COLORS[name] }));

    setData(chartData);
  }, []);

  if (data.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-20">
        No activity yet. Start by calling, texting, or video calling a friend!
      </p>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Stats</h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            innerRadius="60%"
            outerRadius="80%"
            cornerRadius={6}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [value, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
