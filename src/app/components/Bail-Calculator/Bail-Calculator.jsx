'use client';
import dynamic from 'next/dynamic';

// testing path

import React, { useState } from 'react';
import styles from "@/app/components/Bail-Calculator/Bail-calculator.module.css";
import { ipcData } from "@/app/components/ipcSections";

// testing

const JsPDF = dynamic(() => import('jspdf'), { ssr: false });

const BailReckoner = () => {
  const [lawType, setLawType] = useState('');
  const [specialStatute, setSpecialStatute] = useState('');
  const [imprisonmentYears, setImprisonmentYears] = useState('');
  const [imprisonmentMonths, setImprisonmentMonths] = useState('');
  const [flightRisk, setFlightRisk] = useState(false);
  const [riskOfInfluencingWitnesses, setRiskOfInfluencingWitnesses] = useState(false);
  const [familyInJurisdiction, setFamilyInJurisdiction] = useState(false);
  const [employed, setEmployed] = useState(false);
  const [ownsProperty, setOwnsProperty] = useState(false);
  const [bailEligibility, setBailEligibility] = useState(null);
  const [sections, setSections] = useState([{ code: '' }]);
  const [summary, setSummary] = useState(null);

  const ipcSec = ipcData.sections;

  const handleLawTypeChange = (event) => {
    setLawType(event.target.value);
  };

  const handleSpecialStatuteChange = (event) => {
    setSpecialStatute(event.target.value);
  };

  const handleImprisonmentYearsChange = (event) => {
    setImprisonmentYears(event.target.value);
  };

  const handleImprisonmentMonthsChange = (event) => {
    setImprisonmentMonths(event.target.value);
  };

  const handleFlightRiskChange = (event) => {
    setFlightRisk(event.target.checked);
  };

  const handleRiskOfInfluencingWitnessesChange = (event) => {
    setRiskOfInfluencingWitnesses(event.target.checked);
  };

  const handleFamilyInJurisdictionChange = (event) => {
    setFamilyInJurisdiction(event.target.checked);
  };

  const handleEmployedChange = (event) => {
    setEmployed(event.target.checked);
  };

  const handleOwnsPropertyChange = (event) => {
    setOwnsProperty(event.target.checked);
  };

  const handleSectionChange = (index, event) => {
    const newSections = [...sections];
    newSections[index].code = event.target.value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { code: '' }]);
  };

  const removeSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const calculateBailEligibility = () => {
    const ipcSections = ipcData.sections;
    let score = 0;
    let bailableByDefault = true;

    sections.forEach((section) => {
      const found = ipcSections.find((sec) => sec.code === section.code);
      if (found) {
        score += found.bailableByDefault ? 100 : 50;
        if (!found.bailableByDefault) {
          bailableByDefault = false;
        }
      }
    });

    score -= parseInt(imprisonmentYears) * 5 + parseInt(imprisonmentMonths) * 0.5;
    if (flightRisk) score -= 20;
    if (riskOfInfluencingWitnesses) score -= 20;
    if (familyInJurisdiction) score += 10;
    if (employed) score += 10;
    if (ownsProperty) score += 10;

    const bailEligible = score >= 60 && bailableByDefault;

    setBailEligibility({ bailEligible, score, sections: sections.map((section) => ipcSections.find((sec) => sec.code === section.code)) });
  };

  const generateSummary = () => {
    if (!bailEligibility) {
      alert("Please calculate bail eligibility first.");
      return;
    }

    const summaryText = `
      Bail Eligibility Summary:

      Law Type: ${lawType}
      ${lawType === 'IPC' ? `Primary IPC Sections: ${sections.map((section) => section.code).join(', ')}` : `${lawType} Section: ${specialStatute}`}
      Imprisonment: ${imprisonmentYears} years, ${imprisonmentMonths} months

      Factors Considered:
      - Flight Risk: ${flightRisk ? 'Yes' : 'No'}
      - Risk of Influencing Witnesses: ${riskOfInfluencingWitnesses ? 'Yes' : 'No'}
      - Family in Jurisdiction: ${familyInJurisdiction ? 'Yes' : 'No'}
      - Employed: ${employed ? 'Yes' : 'No'}
      - Owns Property: ${ownsProperty ? 'Yes' : 'No'}

      Bail Eligibility: ${bailEligibility.bailEligible ? 'Eligible' : 'Not Eligible'}
      Score: ${bailEligibility.score}

      ${bailEligibility.sections.map((section) => `
      Section Details:
      Code: ${section.code}
      Description: ${section.description}
      Punishment: ${section.punishment}
      `).join('\n')}

      This summary is generated based on the information provided and should be used for reference only.
      Please consult with a legal professional for accurate legal advice.
    `;

    setSummary(summaryText);
  };

  const generatePDF = async () => {
    if (!summary) {
      alert("Please generate a summary first.");
      return;
    }

    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.setFont('Times', 'Roman');

    const splitText = doc.splitTextToSize(summary, 180);
    doc.text(splitText, 15, 15);

    doc.save("bail_eligibility_summary.pdf");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Indian Bail Reckoner</h2>
      <div className={styles.formgroup}>
        <label htmlFor="lawType">Select Law Type:</label>
        <select id="lawType" value={lawType} onChange={handleLawTypeChange}>
          <option value="">Select a law type</option>
          <option value="IPC">Indian Penal Code (IPC)</option>
          <option value="BNS">Bhartiya Nyaya Sanhita</option>
          <option value="BSS">Bhartiya Suraksha Sanhita</option>
          <option value="BSA">Bhartiya Saakshya Adhiniyam</option>
        </select>
      </div>

      {lawType === 'IPC' && (
        <div id="ipcSection" className={styles.formgroup}>
          <label htmlFor="primarySection"><strong>Primary IPC Sections</strong></label>
          {sections.map((section, index) => (
            <div key={index} className={styles.sectionInput}>
              <input list="ipcSections" id={`primarySection-${index}`} name={`primarySection-${index}`} value={section.code} onChange={(e) => handleSectionChange(index, e)} />
              <datalist id="ipcSections">
                <option value="">Select a section</option>
                {ipcSec.map((sec, secIndex) => (
                  <option key={secIndex} value={sec.code}>{sec.code} - {sec.description}</option>
                ))}
              </datalist>
              <button className={styles.btn} onClick={() => removeSection(index)}>Remove</button>
            </div>
          ))}
          <button className={styles.btn} onClick={addSection}>Add Section</button>
        </div>
      )}

      <div className={styles.formgroup}>
        <label htmlFor="specialStatute">Special Statute (if applicable):</label>
        <select id="specialStatute" value={specialStatute} onChange={handleSpecialStatuteChange}>
          <option value="">None</option>
          <option value="cyberCrimes">Cyber Crimes</option>
          <option value="scstCrimes">Crimes against SC and ST</option>
          <option value="womenCrimes">Crimes against Women</option>
          <option value="childrenCrimes">Crimes against Children</option>
          <option value="stateOffenses">Offenses against the State</option>
          <option value="economicOffenses">Economic Offenses</option>
          <option value="foreignerCrimes">Crimes against Foreigners</option>
        </select>
      </div>

      <div className={styles.formgroup}>
        <label htmlFor="imprisonmentYears">Imprisonment (Years):</label>
        <input type="number" id="imprisonmentYears" value={imprisonmentYears} onChange={handleImprisonmentYearsChange} />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="imprisonmentMonths">Imprisonment (Months):</label>
        <input type="number" id="imprisonmentMonths" value={imprisonmentMonths} onChange={handleImprisonmentMonthsChange} />
      </div>

      <div className={styles.checkboxgroup}>
        <div className={styles.checkbox}>
          <input type="checkbox" id="flightRisk" checked={flightRisk} onChange={handleFlightRiskChange} />
          <label htmlFor="flightRisk">Flight Risk</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="riskOfInfluencingWitnesses" checked={riskOfInfluencingWitnesses} onChange={handleRiskOfInfluencingWitnessesChange} />
          <label htmlFor="riskOfInfluencingWitnesses">Risk of Influencing Witnesses</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="familyInJurisdiction" checked={familyInJurisdiction} onChange={handleFamilyInJurisdictionChange} />
          <label htmlFor="familyInJurisdiction">Family in Jurisdiction</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="employed" checked={employed} onChange={handleEmployedChange} />
          <label htmlFor="employed">Employed</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="ownsProperty" checked={ownsProperty} onChange={handleOwnsPropertyChange} />
          <label htmlFor="ownsProperty">Owns Property</label>
        </div>
      </div>

      <button className={styles.btn} onClick={calculateBailEligibility}>Calculate Bail Eligibility</button>

      {bailEligibility && (
        <div>
          <h3>Bail Eligibility: {bailEligibility.bailEligible ? 'Eligible' : 'Not Eligible'}</h3>
          <p>Score: {bailEligibility.score}</p>
          {bailEligibility.sections.map((section, index) => (
            <div key={index}>
              <h4>Section: {section.code}</h4>
              <p>Description: {section.description}</p>
              <p>Punishment: {section.punishment}</p>
            </div>
          ))}
          <button className={styles.btn} onClick={generateSummary}>Generate Summary</button>
        </div>
      )}

      {summary && (
        <div className={styles.summaryContainer}>
          <h3 className={styles.summaryTitle}>Bail Eligibility Summary</h3>
          <pre className={styles.summaryText}>{summary}</pre>
          <button className={styles.btn} onClick={generatePDF}>Generate PDF</button>
        </div>
      )}
    </div>
  );
};

export default BailReckoner;
