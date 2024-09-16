'use client'
import {useState} from 'react';
import styles from '@/app/statistics/statistics.module.css';
import Applications from '@/app/statistics/applications';       // Adjust the path as needed
import AcceptanceRates from '@/app/statistics/acceptanceRates'; // Adjust the path as needed
import Rejections from '@/app/statistics/rejections';           // Adjust the path as needed
import PendingCases from '@/app/statistics/pending';            // Adjust the path as needed
import BailReckoner from '@/app/statistics/index';               // Adjust the path as needed

const StatisticsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Bail Reckoner</div>
          <div className={styles.navLinks}>
            <select id="categorySelect" className={styles.select} style={{color:'black',width:'100%'}}>
              <option value="all">All Statistics</option>
              <option value="applications">Applications</option>
              <option value="acceptance">Acceptance Rates</option>
              <option value="rejections">Rejections</option>
              <option value="pending">Pending Cases</option>
            </select>
          </div>
        </nav>
      </header>

      <main className={styles.container}>
        <div className={styles.chartholder}>
          <Applications />
          <AcceptanceRates />
          <Rejections />
          <PendingCases />
        </div>
          <BailReckoner /> 
      </main>
    </>
  );
};

export default StatisticsPage;
