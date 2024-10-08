'use client';
import React, { useState } from 'react';
import styles from "@/app/components/Bail-Calculator/Bail-calculator.module.css";
import { ipcData } from "@/app/components/ipcSections";

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
  const [bailEligibility, setBailEligibility] = useState({ sections: [] });
  const [sections, setSections] = useState([{ code: " " }]);
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

    // Special statutes handling
    if (specialStatute) {
      switch (specialStatute) {
        case 'cyberCrimes':
          score += 70; // Example score for cyber crimes
          break;
        case 'scstCrimes':
          score += 60; // Example score for crimes against SC and ST
          break;
        case 'womenCrimes':
          score += 80; // Example score for crimes against women
          break;
        case 'childrenCrimes':
          score += 75; // Example score for crimes against children
          break;
        case 'stateOffenses':
          score += 65; // Example score for offenses against the state
          break;
        case 'economicOffenses':
          score += 70; // Example score for economic offenses
          break;
        case 'foreignerCrimes':
          score += 60; // Example score for crimes against foreigners
          break;
        default:
          break;
      }
    }

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
    <div className={styles.container} style={{ color: 'black', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <h2 className={styles.title}><strong>Indian Bail Reckoner</strong></h2>
      <div className={styles.formgroup}>
        <label htmlFor="lawType" style={{ color: 'black' }}>Select Law Type:</label>
        <select id="lawType" value={lawType} onChange={handleLawTypeChange}>
          <option value="">Select a law type</option>
          <option value="IPC" style={{ color: 'black' }}>Indian Penal Code (IPC)</option>
          <option value="BNS" style={{ color: 'black' }}>Bhartiya Nyaya Sanhita</option>
          <option value="BSS" style={{ color: 'black' }}>Bhartiya Suraksha Sanhita</option>
          <option value="BSA" style={{ color: 'black' }}>Bhartiya Saakshya Adhiniyam</option>
        </select>
      </div>
      <div>
        
        {/* {lawType === 'IPC' && (
          <div id="ipcSection">
            <label htmlFor="primarySection"><strong>Primary IPC Sections</strong></label>
            {sections.map((section, index) => (
              <div key={index} className={styles.sectionInput} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input list="ipcSections" id={`primarySection-${index}`} name={`primarySection-${index}`} value={section.code} onChange={(e) => handleSectionChange(index, e)} style={{ maxWidth: "200px", height: "40px", marginRight: '10px' }} />
                <datalist id="ipcSections">
                  <option value="">Select a section</option>
                  {ipcSec.map((sec, secIndex) => (
                    <option key={secIndex} value={sec.code}>{sec.code} - {sec.description}</option>
                  ))}
                </datalist>
                <button className={styles.btn} onClick={() => removeSection(index)} style={{ marginRight: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-minus" style={{ marginRight: '5px' }}></i> Remove
                </button>
              </div>
            ))}
            <button className={styles.btn} onClick={addSection} style={{ borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-plus" style={{ marginRight: '5px' }}></i> Add Section
            </button>
          </div>
        )} */}

                {lawType === 'IPC' && (
          <div id="ipcSection">
            <label htmlFor="primarySection"><strong>Primary IPC Sections</strong></label>
            {sections.map((section, index) => (
              <div key={index} className={styles.sectionInput} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input list="ipcSections" id={`primarySection-${index}`} name={`primarySection-${index}`} value={section.code} onChange={(e) => handleSectionChange(index, e)} style={{ maxWidth: "200px", height: "40px", marginRight: '10px' }} />
                <datalist id="ipcSections">
                  <option value="">Select a section</option>
                  {ipcSec.map((sec, secIndex) => (
                    <option key={secIndex} value={sec.code}>{sec.code} - {sec.description}</option>
                  ))}
                </datalist>
                <button
                  onClick={() => removeSection(index)}
                  style={{
                    marginRight: '10px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s ease-in-out',
                    backgroundColor: '#4CAF50',
                    padding: '10px 20px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  <i className="fas fa-minus" style={{ marginRight: '5px' }}></i> Remove
                </button>
              </div>
            ))}
            <button
              onClick={addSection}
              style={{
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease-in-out',
                backgroundColor: '#4CAF50',
                padding: '10px 20px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <i className="fas fa-plus" style={{ marginRight: '5px' }}></i> Add Section
            </button>
          </div>
        )}


        {lawType === 'BNS' && (
          <div id="bnsSection formgroupCreated">
            <label htmlFor="bnsOption">BNS Option:</label>
            <input list="bnsSections" id="bnsOption" className='w-full' />
            <datalist id="bnsSections">
              <option value="">Select a BNS section</option>
              <option value="BNS1">1 - Short title, extent and commencement</option>
              <option value="BNS2">2 - Definitions</option>
              <option value="BNS3">3 - Punishment of offences committed within India</option>
              <option value="BNS4">4 - Extension of Code to extra-territorial offences</option>
              <option value="BNS5">5 - Certain laws not to be affected by this Sanhita</option>
              <option value="BNS6">6 - Definitions of offence</option>
              <option value="BNS7">7 - Punishment of offences</option>
              <option value="BNS8">8 - Offence committed in consequence of coercion</option>
              <option value="BNS9">9 - Offence requiring a particular intent or knowledge committed by one who is intoxicated</option>
              <option value="BNS10">10 - Offence by companies</option>
              <option value="BNS11">11 - Rash or negligent act</option>
              <option value="BNS12">12 - Punishment for abetment</option>
              <option value="BNS13">13 - Abetment of offence within and beyond India</option>
              <option value="BNS14">14 - Punishment of abetment if the act abetted is committed in consequence and where no express provision is made for its punishment</option>
              <option value="BNS15">15 - Abetment of offence punishable with death or imprisonment for life</option>
            </datalist>
          </div>
        )}
        {lawType === 'BSS' && (
          <div id="bssSection formgroupCreated">
            <label htmlFor="bssOption">BSS Option:</label>
            <input list="bssSections" id="bssOption" className='w-full' />
            <datalist id="bssSections">
              <option value="">Select a BSS section</option>
              <option value="BSS1">1 - Short title, extent and commencement</option>
              <option value="BSS2">2 - Definitions</option>
              <option value="BSS3">3 - Officers of police stations</option>
              <option value="BSS4">4 - Appointment of public prosecutors</option>
              <option value="BSS5">5 - Executive Magistrates</option>
              <option value="BSS6">6 - Powers of Superior officers of police</option>
              <option value="BSS7">7 - Public when to assist Magistrates and police</option>
              <option value="BSS8">8 - Aid to person, other than police officer, executing warrant</option>
              <option value="BSS9">9 - Public to give information of certain offences</option>
              <option value="BSS10">10 - Arrest by police officer without warrant</option>
              <option value="BSS11">11 - Arrest by private person and procedure on such arrest</option>
              <option value="BSS12">12 - Arrest on refusal to give name and residence</option>
              <option value="BSS13">13 - Pursuit of offenders into other jurisdictions</option>
              <option value="BSS14">14 - Search of place entered by person sought to be arrested</option>
              <option value="BSS15">15 - Procedure where gate of place to be searched is closed</option>
            </datalist>
          </div>
        )}
        {lawType === 'BSA' && (
          <div id="bsaSection formgroupCreated">
            <label htmlFor="bsaOption">BSA Option:</label>
            <input list="bsaSections" id="bsaOption" className='w-full' />
            <datalist id="bsaSections">
              <option value="">Select a BSA section</option>
              <option value="BSA1">1 - Short title, extent and commencement</option>
              <option value="BSA2">2 - Definitions</option>
              <option value="BSA3">3 - Facts which need to be proved</option>
              <option value="BSA4">4 - Relevancy of facts forming part of same transaction</option>
              <option value="BSA5">5 - Facts which are the occasion, cause or effect of facts in issue</option>
              <option value="BSA6">6 - Motive, preparation and previous or subsequent conduct</option>
              <option value="BSA7">7 - Facts necessary to explain or introduce relevant facts</option>
              <option value="BSA8">8 - Things said or done by conspirator in reference to common design</option>
              <option value="BSA9">9 - Facts showing existence of state of mind, or of body, or bodily feeling</option>
              <option value="BSA10">10 - Facts bearing on question whether act was accidental or intentional</option>
              <option value="BSA11">11 - Facts showing course of business when relevant</option>
              <option value="BSA12">12 - Admissions defined</option>
              <option value="BSA13">13 - Admission by party to proceeding or his agent</option>
              <option value="BSA14">14 - Admission by party to proceeding or his agent</option>
              <option value="BSA15">15 - Admission by party to proceeding or his agent</option>
            </datalist>
          </div>
        )}
      </div>

      <div className={styles.formgroup}>
        <label htmlFor="specialStatute" style={{ color: 'black' }}>Special Statute (if applicable):</label>
        <select id="specialStatute" value={specialStatute} onChange={handleSpecialStatuteChange}>
          <option value="" style={{ color: 'black' }}>None</option>
          <option value="cyberCrimes" style={{ color: 'black' }}>Cyber Crimes</option>
          <option value="scstCrimes" style={{ color: 'black' }}>Crimes against SC and ST</option>
          <option value="womenCrimes" style={{ color: 'black' }}>Crimes against Women</option>
          <option value="childrenCrimes" style={{ color: 'black' }}>Crimes against Children</option>
          <option value="stateOffenses" style={{ color: 'black' }}>Offenses against the State</option>
          <option value="economicOffenses" style={{ color: 'black' }}>Economic Offenses</option>
          <option value="foreignerCrimes" style={{ color: 'black' }}>Crimes against Foreigners</option>
        </select>
      </div>

      <div className={styles.formgroup}>
        <label htmlFor="imprisonmentYears" style={{ color: 'black' }}>Imprisonment (Years):</label>
        <input type="number" id="imprisonmentYears" value={imprisonmentYears} onChange={handleImprisonmentYearsChange} />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="imprisonmentMonths" style={{ color: 'black' }}>Imprisonment (Months):</label>
        <input type="number" id="imprisonmentMonths" value={imprisonmentMonths} onChange={handleImprisonmentMonthsChange} />
      </div>

      <div className={styles.checkboxgroup}>
        <div className={styles.checkbox}>
          <input type="checkbox" id="flightRisk" checked={flightRisk} onChange={handleFlightRiskChange} />
          <label htmlFor="flightRisk" style={{ color: 'black' }}>Flight Risk</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="riskOfInfluencingWitnesses" checked={riskOfInfluencingWitnesses} onChange={handleRiskOfInfluencingWitnessesChange} />
          <label htmlFor="riskOfInfluencingWitnesses" style={{ color: 'black' }}>Risk of Influencing Witnesses</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="familyInJurisdiction" checked={familyInJurisdiction} onChange={handleFamilyInJurisdictionChange} />
          <label htmlFor="familyInJurisdiction" style={{ color: 'black' }}>Family in Jurisdiction</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="employed" checked={employed} onChange={handleEmployedChange} />
          <label htmlFor="employed" style={{ color: 'black' }}>Employed</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="ownsProperty" checked={ownsProperty} onChange={handleOwnsPropertyChange} />
          <label htmlFor="ownsProperty" style={{ color: 'black' }}>Owns Property</label>
        </div>
      </div>

      <button className={styles.btn} onClick={calculateBailEligibility}>Calculate Bail Eligibility</button>

      {bailEligibility && (
  <div>
    <h3>Bail Eligibility: {bailEligibility.bailEligible ? 'Eligible' : 'Not Eligible'}</h3>
    <p>Score: {bailEligibility.score}</p>
    {Array.isArray(bailEligibility.sections) && bailEligibility.sections.length > 0 ? (
      bailEligibility.sections.map((section, index) => (
        <div key={index}>
          <h4>Section: {section?.code || 'N/A'}</h4>
          <p>Description: {section?.description || 'N/A'}</p>
          <p>Punishment: {section?.punishment || 'N/A'}</p>
        </div>
      ))
    ) : (
      <p>No sections available.</p>
    )}
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
