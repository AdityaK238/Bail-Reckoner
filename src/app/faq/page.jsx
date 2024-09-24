'use client';
import { useState } from "react";
import translations from "./localization"; // Your localization data
import styles from "@/app/faq/fa-q.module.css"; // Import your module CSS

const FaqComponent = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to 'en'
    const [activeIndex, setActiveIndex] = useState(null); // To keep track of the active accordion

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close if already open
        } else {
            setActiveIndex(index); // Open selected
        }
    };

    const faq = translations[selectedLanguage] || translations.en;

    return (
        <div id={styles.faqContainer}> {/* Apply the faqContainer ID */}
    <h1 style={{ fontSize: "25px" }}>FAQ</h1>
    <div id={styles.languageDropdown} style={{ background: "#acacac", justifyContent: "center", alignItems: "center" }}>
        <h2 style={{ fontSize: "25px" }}>Select your language</h2>
        <select 
            value={selectedLanguage} 
            onChange={handleLanguageChange} 
            style={{ 
                justifyContent: "center", 
                fontWeight: "bold", 
                alignItems: "center", 
                color: 'black', 
                background: 'aliceblue', 
                borderRadius: "45px", 
                width: "25%", 
                height: "40px", 
                textAlign: 'center',    // Centers the text inside
                textAlignLast: 'center' // Ensures selected option text is centered
            }}>
            <option value='en'>English</option>
            <option value='hi'>Hindi</option>
            <option value='pa'>Punjabi</option>
            <option value='gu'>Gujarati</option>
            <option value='ml'>Malayalam</option>
            <option value='te'>Telugu</option>
            <option value='ma'>Marathi</option>
            <option value='sa'>Santhali</option>
                </select>
            </div>
            <div>
                {Object.keys(faq).map((key, index) => {
                    if (key.startsWith('faq')) {
                        const answerKey = `answer${key.substring(3)}`;
                        return (
                            <div key={index} id={styles.accordionItem} style={{color:'black'}}> {/* Apply accordionItem ID */}
                                <button 
                                    id={styles.accordionButton} 
                                    onClick={() => toggleAccordion(index)} 
                                    className={activeIndex === index ? 'active' : ''}> {/* Toggle class based on activeIndex */}
                                    {faq[key]}
                                </button>
                                {activeIndex === index && (
                                    <div id={styles.accordionBody}> {/* Apply accordionBody ID */}
                                        <p>{faq[answerKey]}</p>
                                    </div>
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FaqComponent;
