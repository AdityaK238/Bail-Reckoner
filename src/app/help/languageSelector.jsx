"use client";
import React from 'react';
import Image from 'next/image';

const LanguageSelector = ({ onLanguageSelect }) => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  const styles = {
    navbar: {
      backgroundColor: 'black',
      padding: '10px',
      borderBottom: '1px solid #d0d0d0',
      display: 'flex',
      justifyContent: 'center',
    },
    toggleSwitch: {
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    toggleSwitchHover: {
      backgroundColor: '#555',
    },
    container: {
      padding: '20px',
      backgroundColor: 'transparent',
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
      gridTemplateColumns: 'repeat(3, 1fr)', // Maintaining previous column structure
      gap: '20px',
      padding: '20px',
      backgroundColor: '#1e1e1e',
      fontFamily: 'Arial, sans-serif',
    },
    languageItem: {
      backgroundColor: 'aliceblue',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column', // Ensures image is above text
      alignItems: 'center',
      justifyContent: 'center',
    },
    languageItemHover: {
      backgroundColor: 'lightblue',
    },
    languageText: {
      fontSize: '16px',
      color: '#333',
      marginTop: '10px', // Ensures space between image and text
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
          <h2 style={{ textAlign: 'center', color: 'white' }}>Help Section</h2>
          <div style={styles.languageSelection}>
            {[
              { lang: 'English', code: 'english', imgSrc: '/english.png' },
              { lang: 'Marathi(मराठी)', code: 'marathi', imgSrc: '/marathi.png' },
              { lang: 'Kannada(ಕನ್ನಡ)', code: 'kannada', imgSrc: '/kannada.png' },
              { lang: 'Hindi', code: 'hindi', imgSrc: '/hindi.png' },
              { lang: 'Telugu(తెలుగు)', code: 'telugu', imgSrc: '/telugu.png' },
              { lang: 'Tamil(தமிழ்)', code: 'tamil', imgSrc: '/tamil.png' },
              { lang: 'Urdu(اردو)', code: 'urdu', imgSrc: '/urdu.png' },
              { lang: 'Gujarati(ગુજરાતી)', code: 'gujarati', imgSrc: '/gujrati.png' },
              { lang: 'Odia(ଓଡ଼ିଆ)', code: 'odia', imgSrc: '/odia.png' },
              { lang: 'Bengali(বাংলা)', code: 'bengali', imgSrc: '/bengali.png' },
              { lang: 'Assamese(অসমীয়া)', code: 'assamese', imgSrc: '/assam.png' },
              { lang: 'Malayalam(മലയാളം)', code: 'malayalam', imgSrc: '/malayalam.png' },
              { lang: 'Punjabi(ਪੰਜਾਬੀ)', code: 'punjabi', imgSrc: '/punjabi.png' },
            ].map((language) => (
              <div
                key={language.code}
                style={styles.languageItem}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.languageItemHover.backgroundColor)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.languageItem.backgroundColor)}
                onClick={() => onLanguageSelect(language.code)}
              >
                <Image src={language.imgSrc} alt={`${language.lang} flag`} style={styles.languageImage}></Image>
                <div style={styles.languageText}>{language.lang}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
