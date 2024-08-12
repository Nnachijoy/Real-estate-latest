



import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./LineChart.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Total visits',
            data: [20000000, 30000000, 25000000, 35000000, 24000033, 26000000],
            fill: false,
            borderColor: '#FF6D00',
            backgroundColor: '#FF6D00',
            pointBackgroundColor: '#FF6D00',
            pointBorderColor: '#FF6D00',
            pointHoverBackgroundColor: '#FF6D00',
            pointHoverBorderColor: '#FF6D00',
            tension: 0.4,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `${context.raw.toLocaleString()} Visitors`;
                },
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function (value) {
                    return value.toLocaleString();
                },
            },
        },
    },
};

const LineChart = () => (
    <div className="chart-container">
        <Card className="border border-0" style={{ width: '490px', margin: '20px auto', padding: '20px' }}>
            <Card.Body>
                <Card.Title className="fw-bold mt-3">Total visits</Card.Title>
                <Line className="mt-5" data={data} options={options} />
            </Card.Body>
        </Card>
    </div>
);

export default LineChart;
