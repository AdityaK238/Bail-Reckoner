"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import styles from "@/app/statistics/statistics.module.css"; // Ensure CSS module is applied
import { Columns } from "lucide-react";

const BailReckoner = () => {
  const chartRefs = useRef({}); // Ref to store chart instances

  // Memoize bailData to avoid it being recreated on every render
  const bailData = useMemo(() => ({
    total: 721554,
    accepted: 140928,
    rejected: 43038,
    pending: 537588,
    highCourtData: [
      { court: "Allahabad", accepted: 5628, rejected: 3768, pending: 16337 },
      { court: "Calcutta", accepted: 6245, rejected: 5431, pending: 101349 },
      { court: "Bombay", accepted: 2008, rejected: 679, pending: 56163 },
      { court: "Chhattisgarh", accepted: 3973, rejected: 1077, pending: 11655 },
      { court: "Jammu & Kashmir", accepted: 0, rejected: 366, pending: 1656 },
      { court: "Jharkhand", accepted: 47254, rejected: 10889, pending: 97100 },
      { court: "Kerala", accepted: 11447, rejected: 3730, pending: 76884 },
      { court: "Manipur", accepted: 116, rejected: 31, pending: 302 },
      { court: "Meghalaya", accepted: 13, rejected: 23, pending: 752 },
      { court: "Rajasthan", accepted: 31457, rejected: 10281, pending: 129567 },
      { court: "Sikkim", accepted: 4, rejected: 5, pending: 69 },
      { court: "Tripura", accepted: 523, rejected: 291, pending: 2263 },
      { court: "Uttarakhand", accepted: 6751, rejected: 1015, pending: 19401 },
      { court: "Orissa", accepted: 20739, rejected: 3033, pending: 149997 },
      { court: "Gauhati", accepted: 4770, rejected: 2419, pending: 79647 }
    ],
    yearlyTrend: [
      { month: "Jan", total: 60129 },
      { month: "Feb", total: 62500 },
      { month: "Mar", total: 65000 },
      { month: "Apr", total: 63000 },
      { month: "May", total: 66000 },
      { month: "Jun", total: 64000 }
    ]
  }), []);

  useEffect(() => {
    const ctx1 = document.getElementById("applicationStatusChart");
    const ctx2 = document.getElementById("highCourtComparisonChart");
    const ctx3 = document.getElementById("applicationTrendChart");

    // Destroy previous chart instances if they exist
    Object.values(chartRefs.current).forEach(chart => chart?.destroy());

    // Create new charts
    if (ctx1) {
      const ctx1Instance = ctx1.getContext("2d");
      if (ctx1Instance) {
        chartRefs.current.applicationStatusChart = new Chart(ctx1Instance, {
          type: "pie",
          data: {
            labels: ["Accepted", "Rejected", "Pending"],
            datasets: [
              {
                data: [bailData.accepted, bailData.rejected, bailData.pending],
                backgroundColor: ["#4BE1AB", "#FF6B6B", "#FFC75F"]
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Application Status Distribution" }
            }
          }
        });
      }
    }

    if (ctx2) {
      const ctx2Instance = ctx2.getContext("2d");
      if (ctx2Instance) {
        chartRefs.current.highCourtComparisonChart = new Chart(ctx2Instance, {
          type: "bar",
          data: {
            labels: bailData.highCourtData.map(d => d.court),
            datasets: [
              { label: "Accepted", data: bailData.highCourtData.map(d => d.accepted), backgroundColor: "#4BE1AB" },
              { label: "Rejected", data: bailData.highCourtData.map(d => d.rejected), backgroundColor: "#FF6B6B" },
              { label: "Pending/Unclear", data: bailData.highCourtData.map(d => d.pending), backgroundColor: "#FFC75F" }
            ]
          },
          options: {
            responsive: true,
            scales: { x: { stacked: true }, y: { stacked: true } },
            plugins: { title: { display: true, text: "High Court Comparison" } }
          }
        });
      }
    }

    if (ctx3) {
      const ctx3Instance = ctx3.getContext("2d");
      if (ctx3Instance) {
        chartRefs.current.applicationTrendChart = new Chart(ctx3Instance, {
          type: "line",
          data: {
            labels: bailData.yearlyTrend.map(d => d.month),
            datasets: [
              {
                label: "Total Applications",
                data: bailData.yearlyTrend.map(d => d.total),
                borderColor: "rgba(30, 136, 229, 0.8)",
                fill: false,
                tension: 0.1
              }
            ]
          },
          options: {
            responsive: true,
            plugins: { title: { display: true, text: "Yearly Application Trend" } },
            scales: { y: { beginAtZero: true } }
          }
        });
      }
    }

    return () => {
      Object.values(chartRefs.current).forEach(chart => chart?.destroy());
    };
  }, [bailData]);

  return (
    <div>
      <main className={styles.container}>
        <h1>Bail Application Statistics</h1>
        <div className={styles.chartholder}>
        <div className={styles.summaryCards}>
          <div className={styles.card}>
            <h3>Total Applications</h3>
            <div className={styles.value}>10,0000</div>
          </div>
          <div className={styles.card}>
            <h3>Accepted</h3>
            <div className={styles.value}>8,000</div>
          </div>
          <div className={styles.card}>
            <h3>Rejected</h3>
            <div className={styles.value}>3,000</div>
          </div>
          <div className={styles.card}>
            <h3>Pending</h3>
            <div className={styles.value}>1,000</div>
          </div>
        </div>
        <br />
        <br />
        <div className={styles.charts} style={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)'}}>
          <div className={styles.chartContainer} style={{width:'600px',height:'300px',display:'flex',flexDirection:'column'}}>
            <canvas id="applicationStatusChart"></canvas>
          </div>
          <div className={styles.chartContainer} style={{width:'600px',height:'300px',display:'flex',flexDirection:'column'}}>
            <canvas id="highCourtComparisonChart"></canvas>
          </div>
          <div className={styles.chartContainer} style={{width:'600px',height:'300px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:"2%"}}>
            <canvas id="applicationTrendChart"></canvas>
          </div>
        </div>

        <div className={styles.newFeatures}>
          <div className={styles.featureCard}>
            <h3>Case Processing Efficiency</h3>
            <div className={styles.progressBar}>
              <div className={styles.progress}></div>
            </div>
            <p>Current efficiency: 95%</p>
          </div>

          <div className={styles.featureCard}>
            <h3>Top Reasons for Rejection</h3>
            <table>
              <tbody>
                <tr>
                  <th>Reason</th>
                  <th>Percentage</th>
                </tr>
                <tr>
                  <td>Flight Risk</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>Severity of Crime</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>Prior Convictions</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Other</td>
                  <td>20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.featureCard} style={{width:'600px',height:'300px'}}>
            <h3>Recent Updates</h3>
            <ul>
              <li>New bail guideline implemented on 01/05/2024</li>
              <li>System upgrade scheduled for 15/05/2024</li>
              <li>Quarterly report due by 30/06/2024</li>
            </ul>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default BailReckoner;
