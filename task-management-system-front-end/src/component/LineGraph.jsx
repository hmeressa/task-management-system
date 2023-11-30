import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 25, 15, 30, 20],
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  

  return (
    <div>
      <h2>Line Graph Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;

