"use client";
import React from 'react';

const Hindi = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <a href="#getting-started" style={styles.navItem}>शुरू करें</a>
        <a href="#pages" style={styles.navItem}>पृष्ठ अवलोकन</a>
        <a href="#bail-calculator" style={styles.navItem}>जमानत कैलकुलेटर</a>
        <a href="#faq" style={styles.navItem}>सामान्य प्रश्न</a>
      </nav>

      <h1 style={styles.heading}>व्यापक जमानत रेकनर उपयोगकर्ता मार्गदर्शिका</h1>

      <div id="getting-started" style={styles.section}>
        <h2>1. शुरू करें</h2>
        <p>
          जमानत रेकनर एप्लिकेशन में आपका स्वागत है। यह व्यापक मार्गदर्शिका
          आपको सभी विशेषताओं और कार्यात्मकताओं के माध्यम से मार्गदर्शन करेगी,
          जिससे आप हमारे सिस्टम का प्रभावी ढंग से उपयोग कर सकेंगे।
        </p>
        <p>
          <em>
            छवि: जमानत रेकनर डैशबोर्ड का एक स्क्रीनशॉट, जिसमें मुख्य मेनू और
            प्रमुख विशेषताओं तक त्वरित पहुंच बटन दिखाए गए हैं।
          </em><br /><br />
        </p>
      </div>

      <div id="pages" style={styles.section}>
        <h2>2. पृष्ठ अवलोकन</h2>

        <h3>2.1 लॉगिन पृष्ठ</h3>
        <p>
          लॉगिन पृष्ठ जमानत रेकनर सिस्टम तक आपकी पहुंच का द्वार है। यहां आपको
          क्या जानने की आवश्यकता है:
        </p>
        <ul>
          <li>अपना उपयोगकर्ता नाम और पासवर्ड दर्ज करें</li>
          <li>आवश्यक होने पर "पासवर्ड भूल गए" लिंक का उपयोग करें</li>
          <li>नए उपयोगकर्ता "रजिस्टर" बटन के माध्यम से खाता बना सकते हैं</li>
        </ul>
        <p>
          <em>
            छवि: उपयोगकर्ता नाम और पासवर्ड के लिए फ़ील्ड वाली लॉगिन स्क्रीन,
            साथ ही "पासवर्ड भूल गए" और "रजिस्टर" विकल्प।
          </em>
        </p><br />

        <h3>2.2 सामान्य प्रश्न पृष्ठ</h3>
        <p>
          हमारा सामान्य प्रश्न पृष्ठ जमानत गणना, सिस्टम उपयोग और कानूनी विचारों
          से संबंधित सामान्य प्रश्नों का उत्तर देता है।
        </p>
        <ul>
          <li>आसान नेविगेशन के लिए श्रेणियों में व्यवस्थित</li>
          <li>त्वरित उत्तर के लिए खोज योग्य</li>
          <li>उपयोगकर्ता प्रतिक्रिया के आधार पर नियमित रूप से अद्यतन</li>
        </ul>
        <p>
          <em>
            छवि: विस्तार योग्य उत्तरों के साथ श्रेणीबद्ध प्रश्न दिखाने वाला
            सामान्य प्रश्न पृष्ठ।
          </em>
        </p><br />

        <h3>2.3 सांख्यिकी पृष्ठ</h3>
        <p>
          सांख्यिकी पृष्ठ जमानत रुझानों और सिस्टम उपयोग में बहुमूल्य जानकारी
          प्रदान करता है:
        </p>
        <ul>
          <li>जमानत राशि पर समग्र डेटा देखें</li>
          <li>समय के साथ रुझानों का विश्लेषण करें</li>
          <li>विभिन्न मापदंडों द्वारा आँकड़ों को फ़िल्टर करें</li>
        </ul>
        <p>
          <em>छवि: जमानत से संबंधित आंकड़ों के ग्राफ और चार्ट दिखाने वाला सांख्यिकी पृष्ठ।</em>
        </p>
      </div>

      <div id="bail-calculator" style={styles.section}>
        <h2>3. जमानत कैलकुलेटर का उपयोग करना</h2>
        <p>जमानत कैलकुलेटर हमारे एप्लिकेशन की मुख्य विशेषता है। इसका प्रभावी ढंग से उपयोग कैसे करें:</p>
        <ol>
          <li>जमानत कैलकुलेटर पृष्ठ पर जाएं</li>
          <li>आरोपी का व्यक्तिगत विवरण दर्ज करें</li>
          <li>अपराध का विवरण दर्ज करें</li>
          <li>कोई शमन या वृद्धि कारक जोड़ें</li>
          <li>"जमानत गणना" पर क्लिक करें</li>
        </ol>
        <p><em>छवि: आरोपी विवरण और अपराध जानकारी के लिए इनपुट फ़ील्ड दिखाने वाला जमानत कैलकुलेटर इंटरफ़ेस।</em></p>
      </div>
      <div id="faq" style={styles.section}>
        <h2>4. अक्सर पूछे जाने वाले प्रश्न</h2>
        <h3>जमानत गणना कितनी सटीक है?</h3>
        <p>हमारी प्रणाली उन्नत एल्गोरिदम और अद्यतन कानूनी दिशानिर्देशों का उपयोग करती है ताकि अत्यधिक सटीक जमानत अनुशंसाएं प्रदान की जा सकें। हालांकि, अंतिम निर्णय हमेशा न्यायाधीश का होता है।</p>

        <h3>क्या मैं जमानत गणना को संशोधित कर सकता हूं?</h3>
        <p>हां, आप गणनाओं को संशोधित कर सकते हैं। अपने इतिहास में केस पर जाएं और "गणना संपादित करें" चुनें ताकि किसी भी जानकारी को अपडेट किया जा सके और पुनः गणना की जा सके।</p>

        <h3>क्या मेरे डेटा सुरक्षित हैं?</h3>
        <p>बिलकुल। हम सभी डेटा को सुरक्षित करने के लिए अत्याधुनिक एन्क्रिप्शन और सुरक्षा उपायों का उपयोग करते हैं। अधिक जानकारी के लिए कृपया हमारी सुरक्षा नीति देखें।</p>
      </div>
    </div>
  );
};

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

export default Hindi;
