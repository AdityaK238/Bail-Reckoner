"use client";
import styles from "@/app/help/help.module.css";
import React from 'react';

const LanguageSelector = ({ onLanguageSelect }) => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  const styles = {
    navbar: {
      backgroundColor: 'black',
      padding: '5px',
      borderBottom: '1px solid #d0d0d0',
    },
    toggleSwitch: {
      padding: '5px 10px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    toggleSwitchHover: {
      backgroundColor: '#555',
    },
    container: {
      backgroundColor: 'transparent',
      padding: '20px',
    },
    languageCard: {
      padding: '20px',
      backgroundColor: '#1e1e1e',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    languageSelection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      padding: '20px',
      backgroundColor: '#1e1e1e',
      fontFamily: 'Arial, sans-serif',
    },
    languageItem: {
      backgroundColor: 'aliceblue',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    languageItemHover: {
      backgroundColor: 'lightblue',
    },
    languageText: {
      fontSize: '14px',
      color: '#333',
      marginBottom: '5px',
    },
    languageImage: {
      width: '100px',
      height: '100px',
      borderRadius: '10px',
      objectFit: 'cover',
      marginBottom: '10px',
    },
  };

  return (
    <div>
      {/* Navbar with light/dark mode toggle */}
      <div style={styles.navbar}>
        <h1></h1>
        <button
          style={styles.toggleSwitch}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.toggleSwitchHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.toggleSwitch.backgroundColor)}
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>

      <div style={styles.container}>
        <div style={styles.languageCard}>
          <h2 style={{ textAlign: 'center', color: 'darkviolet' }}>Help Section</h2>
          <div style={styles.languageSelection}>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('english')}
            >
              <img src="/english.png" alt="English flag" style={styles.languageImage} />
              <div style={styles.languageText}>English</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('marathi')}
            >
              <img src="/marathi.png" alt="Marathi flag" style={styles.languageImage} />
              <div style={styles.languageText}>Marathi(मराठी)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('kannada')}
            >
              <img src="/kannada.png" alt="Kannada flag" style={styles.languageImage} />
              <div style={styles.languageText}>Kannada(ಕನ್ನಡ)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('hindi')}
            >
              <img src="/hindi.png" alt="Kannada flag" style={styles.languageImage} />
              <div style={styles.languageText}>Hindi()</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('telugu')}
            >
              <img src="/telugu.png" alt="Telugu flag" style={styles.languageImage} />
              <div style={styles.languageText}>Telugu(తెలుగు)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('tamil')}
            >
              <img src="/tamil.png" alt="Tamil flag" style={styles.languageImage} />
              <div style={styles.languageText}>Tamil(தமிழ்)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('urdu')}
            >
              <img src="/urdu.png" alt="Urdu flag" style={styles.languageImage} />
              <div style={styles.languageText}>Urdu(اردو)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('gujarati')}
            >
              <img src="/gujrati.png" alt="Gujarati flag" style={styles.languageImage} />
              <div style={styles.languageText}>Gujarati(ગુજરાતી)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('odia')}
            >
              <img src="/odia.png" alt="Odia flag" style={styles.languageImage} />
              <div style={styles.languageText}>Odia(ଓଡ଼ିଆ)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('bengali')}
            >
              <img src="/bengali.png" alt="Bengali flag" style={styles.languageImage} />
              <div style={styles.languageText}>Bengali(বাংলা)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('assamese')}
            >
              <img src="/assam.png" alt="Assamese flag" style={styles.languageImage} />
              <div style={styles.languageText}>Assamese(অসমীয়া)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('malayalam')}
            >
              <img src="/malayalam.png" alt="Malayalam flag" style={styles.languageImage} />
              <div style={styles.languageText}>Malayalam(മലയാളം)</div>
            </div>
            <div
              style={styles.languageItem}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
              onClick={() => onLanguageSelect('punjabi')}
            >
              <img src="/punjabi.png" alt="Punjabi flag" style={styles.languageImage} />
              <div style={styles.languageText}>Punjabi(ਪੰਜਾਬੀ)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
