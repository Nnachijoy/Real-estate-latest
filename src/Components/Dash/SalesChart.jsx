






// SalesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import 'chart.js/auto';

const SalesChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '',
        data: [50, 20, 150, 100, 300, 400, 200, 250, 300, 150, 200, 300],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#003366',
        },
      },
      y: {
        ticks: {
          color: '#003366',
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div style={{marginBottom:"180px"}}> 
    <Card className="border border-0">
      <Card.Body>
        <Card.Title style={{ color: '#003366' }}>Sales Statistics</Card.Title>
        <div style={{ height: '300px' }}>
          <Line data={data} options={options}  />
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default SalesChart;

