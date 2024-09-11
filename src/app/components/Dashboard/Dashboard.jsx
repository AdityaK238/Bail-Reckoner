import Head from 'next/head';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1 className={styles.title}>Dashboard</h1>
      <p className={styles.description}>Welcome to the dashboard.</p>
    </div>
  );
}