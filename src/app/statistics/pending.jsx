"use client";
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Correct import from chart.js/auto
import Head from 'next/head';
import styles from "@/app/statistics/statistics.module.css"; // Ensure the CSS module is used

const PendingCases = () => {
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    const pendingData = [
      { court: 'Allahabad', pending: 16337 },
      { court: 'Calcutta', pending: 101349 },
      { court: 'Bombay', pending: 56163 },
      { court: 'Chhattisgarh', pending: 11655 },
      { court: 'Jammu & Kashmir', pending: 1656 },
      { court: 'Jharkhand', pending: 97100 },
      { court: 'Kerala', pending: 76884 },
      { court: 'Rajasthan', pending: 129567 },
      { court: 'Uttarakhand', pending: 19401 },
      { court: 'Orissa', pending: 149997 },
    ];

    const canvas = document.getElementById('pendingChart');
    const ctx = canvas?.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart instance if it exists
    }

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: pendingData.map(d => d.court),
          datasets: [{
            label: 'Pending Cases',
            data: pendingData.map(d => d.pending),
            backgroundColor: '#FFC75F',
          }],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Pending Cases by High Court',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Pending Cases',
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
      <Head>
        <title>Bail Reckoner: Pending Cases</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <h2>Pending Cases by High Court</h2>
        <div className={styles.chartContainer} style={{width:'600px',height:'300px'}}>
          <canvas id="pendingChart" style={{width:'400px',height:'200px'}}></canvas>
        </div>
      </main>
    </>
  );
};

export default PendingCases;
