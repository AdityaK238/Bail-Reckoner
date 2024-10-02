"use client";
import React from 'react';

// Inline styles for Kannada page
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 0 20px 0',
    height: '60px',
    fontSize: '18px',
    padding: '0 10px',
    backgroundColor: 'aliceblue',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    flexWrap: 'wrap',
    width: '100%',
  },
  navItem: {
    textDecoration: 'none',
    color: 'blue',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
    flex: '1 1 auto',
    textAlign: 'center',
  },
  section: {
    background: 'aliceblue', // Changed background to aliceblue
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    width: '100%', // Makes section responsive
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
  '@media (max-width: 768px)': {
    nav: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    navItem: {
      textAlign: 'left',
      padding: '8px',
    },
    section: {
      padding: '15px',
    },
  },
  '@media (max-width: 480px)': {
    nav: {
      fontSize: '14px',
    },
    section: {
      padding: '10px',
    },
  },
};

const Kannada = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <a href="#getting-started" style={styles.navItem}><strong>ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ</strong></a>
        <a href="#pages" style={styles.navItem}><strong>ಪುಟಗಳ ಅವಲೋಕನ</strong> </a>
        <a href="#bail-calculator" style={styles.navItem}><strong>ಜಾಮೀನು ಲೆಕ್ಕಗಾರ</strong> </a>
        <a href="#faq" style={styles.navItem}><strong>FAQ</strong></a>
      </nav>

      <h1 style={styles.heading}>ವ್ಯಾಪಕ ಜಾಮೀನಿನ ರೆಕನರ್ ಬಳಕೆದಾರರ ಮಾರ್ಗದರ್ಶಿ</h1>

      <div id="getting-started" style={styles.section}>
        <h2>1. ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ</h2>
        <p>
          ಜಾಮೀನು ರೆಕನರ್ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಸ್ವಾಗತ. ಈ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ ಎಲ್ಲಾ
          ವೈಶಿಷ್ಟ್ಯಗಳು ಮತ್ತು ಕಾರ್ಯಪದ್ಧತಿಗಳನ್ನು ನಿಮಗೆ ತಿಳಿಸುತ್ತವೆ, ಮತ್ತು ನಮ್ಮ
          ವ್ಯವಸ್ಥೆಯನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬಳಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
        </p>
         <br /><br />
      </div>

      <div id="pages" style={styles.section}>
        <h2>2. ಪುಟಗಳ ಅವಲೋಕನ</h2>

        <h3>2.1 ಲಾಗಿನ್ ಪುಟ</h3>
        <p>
          ಲಾಗಿನ್ ಪುಟವು ಜಾಮೀನು ರೆಕನರ್ ಸಿಸ್ಟಮ್‌ ಗೆ ಪ್ರವೇಶದ ದ್ವಾರವಾಗಿದೆ. ನಿಮಗೆ
          ತಿಳಿಯಬೇಕಾದವು ಇವು:
        </p>
        <ul>
          <li>ನಿಮ್ಮ ಬಳಕೆದಾರ ಹೆಸರು ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ</li>
          <li>ಅಗತ್ಯವಿದ್ದರೆ ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ ಲಿಂಕ್ ಬಳಸಿ</li>
          <li>ಹೊಸ ಬಳಕೆದಾರರು ನೋಂದಣಿ ಬಟನ್ ಮೂಲಕ ಖಾತೆಯನ್ನು ಸೃಷ್ಟಿಸಬಹುದು</li>
        </ul>
        <br />

        <h3>2.2 FAQ ಪುಟ</h3>
        <p>
          ನಮ್ಮ FAQ ಪುಟವು ಜಾಮೀನು ಲೆಕ್ಕಪತ್ರ, ವ್ಯವಸ್ಥೆಯ ಬಳಕೆ ಮತ್ತು ಕಾನೂನು
          ಪರಿಗಣನೆಗಳ ಬಗ್ಗೆ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳನ್ನು ನೀಡುತ್ತದೆ.
        </p>
        <ul>
          <li>ಸಹಜ ನಾವಿಗೇಶನ್‌ಗಾಗಿ ವರ್ಗಗೊಳಿಸಲಾಗಿದೆ</li>
          <li>ಶೀಘ್ರ ಉತ್ತರಕ್ಕಾಗಿ ಹುಡುಕಬಹುದಾಗಿದೆ</li>
          <li>ಬಳಕೆದಾರರ ಪ್ರತಿಕ್ರಿಯೆಯ ಆಧಾರದ ಮೇಲೆ ನಿಯಮಿತವಾಗಿ
            ನವೀಕರಿಸಲಾಗುತ್ತದೆ</li>
        </ul>
       <br />

        <h3>2.3 ಅಂಕಿ ಅಂಶ ಪುಟ</h3>
        <p>
          ಅಂಕಿ ಅಂಶ ಪುಟವು ಜಾಮೀನು ಪ್ರವರ್ತನೆಗಳು ಮತ್ತು ವ್ಯವಸ್ಥೆಯ ಬಳಕೆಯ
          ಮಹತ್ವದ ಅಂಶಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ:
        </p>
        <ul>
          <li>ಜಾಮೀನು ಮೊತ್ತದ ಬಗ್ಗೆ ಒಟ್ಟು ಡೇಟಾವನ್ನು ವೀಕ್ಷಿಸಿ</li>
          <li>ಕಾಲಕಾಲಕ್ಕೆ ಪ್ರವರ್ತನೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ</li>
          <li>ವಿವಿಧ ಅಂಶಗಳ ಮೂಲಕ ಅಂಕಿ ಅಂಶಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ</li>
        </ul>
      </div>

      <div id="bail-calculator" style={styles.section}>
        <h2>3. ಜಾಮೀನು ಲೆಕ್ಕಗಾರದ ಬಳಕೆ</h2>
        <p>ಜಾಮೀನು ಲೆಕ್ಕಗಾರವು ನಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ನ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯವಾಗಿದೆ. ಇದರ ಪರಿಣಾಮಕಾರಿ ಬಳಕೆ:</p>
        <ol>
          <li>ಜಾಮೀನು ಲೆಕ್ಕಗಾರ ಪುಟಕ್ಕೆ ಹೋಗಿ</li>
          <li>ಆರೋಪಿತನ ವ್ಯಕ್ತಿಯ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ</li>
          <li>ಅಪರಾಧದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ</li>
          <li>ಯಾವುದೇ ಶಮನ ಅಥವಾ ಹೆಚ್ಚಿಸುವ ಅಂಶಗಳನ್ನು ಸೇರಿಸಿ</li>
          <li>ಜಾಮೀನು ಲೆಕ್ಕಗಿಸಿ ಕ್ಲಿಕ್ ಮಾಡಿ</li>
        </ol>
        <p><em>ಚಿತ್ರ: ಆರೋಪಿ ವಿವರ ಮತ್ತು ಅಪರಾಧ ಮಾಹಿತಿಯಿಗಾಗಿ ಇನ್ಪುಟ್ ಫೀಲ್ಡ್‌ಗಳನ್ನು ತೋರಿಸುವ
            ಜಾಮೀನು ಲೆಕ್ಕಗಾರ ಇಂಟರ್ಫೇಸ್.</em></p>
      </div>
      <div id="faq" style={styles.section}>
        <h2>4. ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು</h2>
        <h3>ಜಾಮೀನು ಲೆಕ್ಕಪತ್ರದ ಶ್ರದ್ಧಾಸ್ಪದತೆ ಏನು?</h3>
        <p>ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ಉನ್ನತ ಆಲ್ಗೊರಿದಮ್‌ ಮತ್ತು ನವೀಕರಿಸಲಾದ ಕಾನೂನು ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಬಳಸುತ್ತದೆ, ಅತ್ಯಂತ ಶ್ರದ್ಧಾಸ್ಪದ ಜಾಮೀನು ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸಲು. ಆದರೆ, ಅಂತಿಮ ತೀರ್ಮಾನವನ್ನು ನ್ಯಾಯಾಧೀಶ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ.</p>

        <h3>ನಾನು ಜಾಮೀನು ಲೆಕ್ಕಪತ್ರವನ್ನು ಬದಲಾಯಿಸಬಹುದೇ?</h3>
        <p>ಹೌದು, ನೀವು ಲೆಕ್ಕಪತ್ರಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು. ನಿಮ್ಮ ಇತಿಹಾಸದಲ್ಲಿ ಪ್ರಕರಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಲೆಕ್ಕಪತ್ರ ಸಂಪಾದಿಸಿ ಆಯ್ಕೆಮಾಡಿ ಯಾವುದೇ ಮಾಹಿತಿಯನ್ನು ನವೀಕರಿಸಲು ಮತ್ತು ಮರು ಲೆಕ್ಕಪತ್ರ ಮಾಡಲು.</p>

        <h3>ನನ್ನ ಡೇಟಾ ಸುರಕ್ಷಿತವಾಗಿದೆಯೇ?</h3>
        <p>ಖಂಡಿತ. ನಾವು ಎಲ್ಲಾ ಡೇಟಾಗಳನ್ನು ರಕ್ಷಿಸಲು ಅತ್ಯಾಧುನಿಕ ಎನ್ಕ್ರಿಪ್ಷನ್‌ ಮತ್ತು ಸುರಕ್ಷತಾ ಕ್ರಮಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು ನಮ್ಮ ಸುರಕ್ಷತಾ ನೀತಿಯನ್ನು ನೋಡಿ.</p>
      </div>
    </div>
  );
};

export default Kannada;
