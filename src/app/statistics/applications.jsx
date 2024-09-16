"use client";
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import styles from '@/app/statistics/statistics.module.css'; 

const Applications = () => {
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    const yearlyTrend = [
      { month: 'Jan', total: 60129 },
      { month: 'Feb', total: 62500 },
      { month: 'Mar', total: 65000 },
      { month: 'Apr', total: 63000 },
      { month: 'May', total: 66000 },
      { month: 'Jun', total: 64000 }
    ];

    const canvas = document.getElementById('trendChart');
    const ctx = canvas?.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart instance if it exists
    }

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: yearlyTrend.map(d => d.month),
          datasets: [
            {
              label: 'Total Applications',
              data: yearlyTrend.map(d => d.total),
              borderColor: 'rgba(30, 136, 229, 0.8)',
              fill: false,
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Yearly Application Trend',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Clean up chart on component unmount
      }
    };
  }, []);

  return (
    <>
      <main className={styles.container}>
        <h1>Bail Applications</h1>
        <div className={styles.chartWrapper} style={{width:'600px',height:'300px'}}> {/* Updated class name to match CSS */}
          <canvas id="trendChart" style={{width:'400px',height:'200px'}}></canvas> {/* Added inline style for width and height */}
        </div>
      </main>
    </>
  );
};

export default Applications;