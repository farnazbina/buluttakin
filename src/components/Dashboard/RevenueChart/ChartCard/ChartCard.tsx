import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { AlignLeft } from 'iconsax-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartCard = () => {
  // Sample data for the chart
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Deposit',
        data: [24500, 17000, 14500, 15100, 10000],
        borderColor: '#6941C6',
        backgroundColor: '#6941C6',
        borderWidth: 3,
        fill: true,
        tension: 0.3,
      },
      {
        label: 'Withdrawal',
        data: [4000, 1000, 5000, 14000, 5000],
        borderColor: '#101828',
        backgroundColor: '#101828',
        borderWidth: 3,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          font: {
            size: 14,
          },
          boxWidth: 5,
          boxHeight: 5,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid:{
          display: false
        },
      },
      y: {
        beginAtZero: true,
        grid: {
            color: '#98A2B3',
        },
        border: {
            dash: [2,4],
        },
        ticks: {
          stepSize: 5000,
          callback: function(value: any) {
            return value >= 1000 ? value / 1000 + 'k' : value;
          },
        },
        min: 0,
        max: 25000,
      },
    },
  };

  return (
    <div className='bg-white rounded-3xl py-2 px-8 shadow-md h-full mt-6'>
      <span className='text-xl leading-6 text-gray-900 font-bold mb-3'>Revenue</span>
      <Line data={data} options={options} style={{ height: '100%', width: '100%' }} />
    </div>
  )
};

export default ChartCard