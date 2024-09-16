"use client";
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Correct import from chart.js/auto
import Head from 'next/head';
import styles from "@/app/statistics/statistics.module.css"; // Ensure the CSS module is used

const Rejections = () => {
  const canvasRef = useRef(null); // Ref to store the canvas element
  const chartRef = useRef(null);  // Ref to store the chart instance

  useEffect(() => {
    const rejectionReasons = [
      { name: 'Flight Risk', value: 35 },
      { name: 'Severity of Crime', value: 30 },
      { name: 'Prior Convictions', value: 25 },
      { name: 'Other', value: 10 },
    ];

    const ctx = canvasRef.current?.getContext('2d'); // Use the ref for the canvas

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: rejectionReasons.map(d => d.name),
          datasets: [{
            data: rejectionReasons.map(d => d.value),
            backgroundColor: ['#FF6B6B', '#FFA07A', '#FFD700', '#20B2AA'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Top Reasons for Rejection',
              font: {
                size: 18,
              },
            },
          },
        },
      });
    }

    // Cleanup the chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      <Head>
        <title>Bail Reckoner: Rejections</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.container}>
        <h2>Top Reasons for Rejection</h2>
        <div className={styles.chartWrapper} style={{ width: '300px', height: '300px' }}>
          <div className={styles.chartContainer} style={{ position: 'relative', width: '100%', height: '100%' }}>
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </main>
    </>
  );
};

export default Rejections;