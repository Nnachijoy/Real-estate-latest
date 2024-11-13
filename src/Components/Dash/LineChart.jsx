import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./LineChart.css"

// Register necessary components from Chart.js to enable line chart functionality
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define data for the line chart, representing total visits over six months
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X-axis labels for each month
    datasets: [
        {
            label: 'Total visits',  // Dataset label
            data: [20000000, 30000000, 25000000, 35000000, 24000033, 26000000],  // Monthly data points
            fill: false,  // Line without area fill under it
            borderColor: '#FF6D00',  // Line color
            backgroundColor: '#FF6D00',  // Point color on the line
            pointBackgroundColor: '#FF6D00',
            pointBorderColor: '#FF6D00',
            pointHoverBackgroundColor: '#FF6D00',
            pointHoverBorderColor: '#FF6D00',
            tension: 0.4,  // Curvature of the line
        },
    ],
};

// Configuration options for the chart's appearance and behavior
const options = {
    plugins: {
        legend: {
            display: false,  // Hide the legend
        },
        tooltip: {
            callbacks: {
                // Format tooltip to show visitor count with commas
                label: function (context) {
                    return `${context.raw.toLocaleString()} Visitors`;
                },
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,  // Y-axis starts at zero
            ticks: {
                // Format Y-axis values with commas
                callback: function (value) {
                    return value.toLocaleString();
                },
            },
        },
    },
};

// Functional component to render the line chart within a styled card
const LineChart = () => (
    <div className="chart-container">
        <Card className="border border-0" style={{ width: '490px', margin: '20px auto', padding: '20px' }}>
            <Card.Body>
                <Card.Title className="fw-bold mt-3">Total visits</Card.Title>  // Title of the chart
                <Line className="mt-5" data={data} options={options} />  // Render the line chart with data and options
            </Card.Body>
        </Card>
    </div>
);

export default LineChart;
