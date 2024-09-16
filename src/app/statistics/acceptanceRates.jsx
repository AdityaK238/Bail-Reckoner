"use client";
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import styles from '@/app/statistics/statistics.module.css'; 

const AcceptanceRates = () => {
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    const acceptanceData = [
      { court: 'Allahabad', rate: 21.8 },
      { court: 'Calcutta', rate: 5.5 },
      { court: 'Bombay', rate: 3.4 },
      { court: 'Chhattisgarh', rate: 23.8 },
      { court: 'Jharkhand', rate: 30.4 },
      { court: 'Kerala', rate: 12.4 },
      { court: 'Rajasthan', rate: 18.4 },
      { court: 'Uttarakhand', rate: 24.8 },
      { court: 'Orissa', rate: 12.0 },
      { court: 'Gauhati', rate: 5.5 },
    ];

    const canvas = document.getElementById('acceptanceChart');
    const ctx = canvas?.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart instance if it exists
    }

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: acceptanceData.map(d => d.court),
          datasets: [
            {
              label: 'Acceptance Rate (%)',
              data: acceptanceData.map(d => d.rate),
              backgroundColor: '#4BE1AB',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Acceptance Rates by High Court',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Acceptance Rate (%)',
              },
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
        <h2>Acceptance Rates by High Court</h2>
        <div className={styles.chartWrapper} style={{width:'600px',height:'300px'}}> 
          <canvas id="acceptanceChart" style={{width:'400px',height:'200px'}}></canvas>
        </div>
      </main>
    </>
  );
};

export default AcceptanceRates;
