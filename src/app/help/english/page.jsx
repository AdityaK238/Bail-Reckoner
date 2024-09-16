"use client";

import { color } from 'chart.js/helpers';
import React from 'react';

const English = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <a href="#getting-started"><strong>Getting Started</strong></a>
        <a href="#pages"><strong>Pages Overview</strong></a>
        <a href="#bail-calculator"><strong>Bail Calculator</strong></a>
        <a href="#faq"><strong>FAQ</strong></a>
      </nav>

      <h1 style={styles.heading}>Comprehensive Bail Reckoner User Guide</h1>

      <div id="getting-started" style={styles.section}>
        <h2>1. Getting Started</h2>
        <p>Welcome to the Bail Reckoner application. This comprehensive guide will walk you through all features and functionalities, ensuring you can effectively use our system.</p>
        <p><em>Image: A screenshot of the Bail Reckoner dashboard, showing the main menu and quick access buttons to key features.</em></p>
      </div>

      <div id="pages" style={styles.section}>
        <h2>2. Pages Overview</h2><br />

        <h3>2.1 Login Page</h3>
        <p>The login page is your gateway to the Bail Reckoner system. Here is what you need to know:</p>
        <ul>
          <li>Enter your username and password</li>
          <li>Use the Forgot Password link if needed</li>
          <li>New users can create an account via the Register button</li>
        </ul>
        <p><em>Image: The login screen with fields for username and password, along with "Forgot Password" and "Register" options.</em></p><br /><br />

        <h3>2.2 FAQ Page</h3>
        <p>Our FAQ page answers common questions about bail calculation, system usage, and legal considerations.</p>
        <ul>
          <li>Organized by categories for easy navigation</li>
          <li>Searchable for quick answers</li>
          <li>Regularly updated based on user feedback</li>
        </ul>
        <p><em>Image: The FAQ page showing categorized questions with expandable answers.</em></p><br /><br />

        <h3>2.3 Stats Page</h3>
        <p>The Stats page provides valuable insights into bail trends and system usage:</p>
        <ul>
          <li>View aggregate data on bail amounts</li>
          <li>Analyze trends over time</li>
          <li>Filter statistics by various parameters</li>
        </ul>
        <p><em>Image: The Stats page displaying graphs and charts of bail-related statistics.</em></p><br /><br />
      </div>

      <div id="bail-calculator" style={styles.section}>
        <h2>3. Using the Bail Calculator</h2>
        <p>The Bail Calculator is the core feature of our application. Here is how to use it effectively:</p>
        <ol>
          <li>Navigate to the Bail Calculator page</li>
          <li>Enter the defendant's personal details</li>
          <li>Input the <span style={styles.tooltip}>offense details<span style={styles.tooltipText}>Include the nature of the offense, any prior convictions, and other relevant factors</span></span></li>
          <li>Add any mitigating or aggravating factors</li>
          <li>Click Calculate Bail</li>
        </ol>
        <p><em>Image: The Bail Calculator interface showing input fields for defendant details and offense information.</em></p><br /><br />

        <h3>3.1 Interpreting Results</h3>
        <p>After calculation, you will see a comprehensive results page:</p>
        <ul>
          <li>Recommended bail amount range</li>
          <li>Risk assessment score</li>
          <li>Breakdown of factors influencing the decision</li>
          <li>Comparative data with similar cases</li>
        </ul>
        <p><em>Image: The results page showing the calculated bail amount, risk assessment, and influencing factors.</em></p><br />
      </div>

      <div id="faq" style={styles.section}>
        <h2>4. Frequently Asked Questions</h2>
        <h3>How accurate is the bail calculation?</h3>
        <p>Our system uses advanced algorithms and up-to-date legal guidelines to provide highly accurate bail recommendations. However, it's important to note that the final decision always rests with the judge.</p>

        <h3>Can I modify a bail calculation after it has been made?</h3>
        <p>Yes, you can modify calculations. Navigate to the case in your history and select Edit Calculation to update any information and recalculate.</p>

        <h3>Is my data secure?</h3>
        <p>Absolutely. We employ state-of-the-art encryption and security measures to ensure all data is protected. For more details, please refer to our Security Policy.</p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: 'black',
  },
  nav: {
    background: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    margin: '0',
    height: '40px',
    fontSize: '16px',
    flexWrap: 'wrap',
    padding: '0 10px',
    backgroundColor: 'aliceblue',
    borderRadius: '6px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  section: {
    background: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    backgroundColor: 'aliceblue',
  },
  tooltip: {
    position: 'relative',
    cursor: 'pointer',
    borderBottom: '1px dotted black',
  },
  tooltipText: {
    visibility: 'hidden',
    width: '220px',
    backgroundColor: '#555',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '5px 0',
    position: 'absolute',
    zIndex: '1',
    bottom: '125%',
    left: '50%',
    marginLeft: '-110px',
    opacity: '0',
    transition: 'opacity 0.3s',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

// Adding media queries for responsiveness
const mediaQueries = {
  '@media (max-width: 768px)': {
    nav: {
      fontSize: '14px',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    heading: {
      fontSize: '20px',
    },
    section: {
      padding: '15px',
    },
    button: {
      padding: '8px 16px',
      fontSize: '14px',
    },
  },
  '@media (max-width: 480px)': {
    nav: {
      fontSize: '12px',
    },
    heading: {
      fontSize: '18px',
    },
    section: {
      padding: '10px',
    },
    button: {
      padding: '6px 12px',
      fontSize: '12px',
    },
  },
};

export default English;
