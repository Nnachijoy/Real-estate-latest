// SalesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';  // Import Line component for line charts
import { Card } from 'react-bootstrap';  // Import Card component from react-bootstrap for styling
import 'chart.js/auto';  // Automatically imports necessary Chart.js components

// SalesChart component displays a line chart of monthly sales statistics
const SalesChart = () => {
  // Data for the line chart, showing sales figures for each month
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  // X-axis labels for each month
    datasets: [
      {
        label: '',  // Empty label since legend display is disabled
        data: [50, 20, 150, 100, 300, 400, 200, 250, 300, 150, 200, 300],  // Monthly sales data
        fill: true,  // Fill the area below the line
        backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Background color for the filled area
        borderColor: 'rgba(255, 99, 132, 1)',  // Line color
        tension: 0.4,  // Smoothness of the line
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,  // Ensures the chart resizes with the container
    maintainAspectRatio: false,  // Prevents aspect ratio enforcement for flexible height
    plugins: {
      legend: {
        display: false,  // Hides the legend
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#003366',  // Color for X-axis tick labels
        },
      },
      y: {
        ticks: {
          color: '#003366',  // Color for Y-axis tick labels
          beginAtZero: true,  // Y-axis starts at zero
        },
      },
    },
  };

  return (
    <div style={{marginBottom:"180px"}}> 
      <Card className="border border-0">  {/* Card component to wrap the chart */}
        <Card.Body>
          <Card.Title style={{ color: '#003366' }}>Sales Statistics</Card.Title>  {/* Title of the chart */}
          <div style={{ height: '300px' }}>  {/* Container for chart with fixed height */}
            <Line data={data} options={options} />  {/* Render the line chart with data and options */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SalesChart;
