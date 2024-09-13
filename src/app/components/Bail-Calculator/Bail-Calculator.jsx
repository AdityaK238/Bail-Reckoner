'use client'
import React, { useState,useEffect } from 'react';
import styles from "@/app/components/Bail-Calculator/Bail-calculator.module.css";
import { Bold } from 'lucide-react';


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

  const [ipcSections, setIpcSections] = useState([]); // To store fetched IPC sections
    const [lt, setLt] = useState('');
  useEffect(() => {
    if (lawType === 'IPC') {
      fetch('http://localhost:3001/apis/sections')
        .then(response => response.json())
        .then(sections => {
          setIpcSections(sections); 
          console.log(ipcSections);
          setLt('IPC')
          // Store fetched sections in state
          
        })
        .catch(error => console.error('Error fetching sections:', error));
    }
  }, [lawType]);
//   useEffect(() => {
//     const ipcSection = document.getElementById('ipcSection');
//     const bnsSection = document.getElementById('bnsSection');
//     const bssSection = document.getElementById('bssSection');
//     const bsaSection = document.getElementById('bsaSection');

//     ipcSection.style.display = 'none';
//     bnsSection.style.display = 'none';
//     bssSection.style.display = 'none';
//     bsaSection.style.display = 'none';

//     switch (lawType) {
//       case 'IPC':
//         ipcSection.style.display = 'block';
//         break;
//       case 'BNS':
//         bnsSection.style.display = 'block';
//         break;
//       case 'BSS':
//         bssSection.style.display = 'block';
//         break;
//       case 'BSA':
//         bsaSection.style.display = 'block';
//         break;
//     }
//   }, [lawType]);


  
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

  const calculateBailEligibility = () => {
    // Implement logic to calculate bail eligibility based on input values
    console.log('Calculating bail eligibility...');
  };

  return (
    <div className={styles.container} style={{color: 'black', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
      <h2 className={styles.title} style={{textDecoration: Bold}}>Indian Bail Reckoner</h2>
      <div className={styles.formgroup}>
        <label htmlFor="lawType" style={{color: 'black'}}>Select Law Type:</label>
        <select id="lawType" value={lawType} onChange={handleLawTypeChange}>
          <option value="">Select a law type</option>
                    <option value="IPC" style={{color: 'black'}}>Indian Penal Code (IPC)</option>
                    <option value="BNS" style={{color: 'black'}}>Bhartiya Nyaya Sanhita</option>
                    <option value="BSS" style={{color: 'black'}}>Bhartiya Suraksha Sanhita</option>
                    <option value="BSA" style={{color: 'black'}}>Bhartiya Saakshya Adhiniyam</option>
        </select>
      </div>
      <div>
      {lt === 'IPC' && (
        <div id="ipcSection">
          <label htmlFor="primarySection">Primary IPC Section:</label>
          <input list="ipcSections" id="primarySection" name="primarySection" />
          <select id="ipcSections">
            {ipcSections.map((section, index) => (
              <option key={index} value={`${section.code} - ${section.description}`} />
            ))}
          </select>
        </div>
      )}

      <div id="bnsSection" style={{ display: 'none' }}>
        <label htmlFor="bnsOption">BNS Option:</label>
        <select id="bnsOption">
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
        </select>
      </div>

      <div id="bssSection" style={{ display: 'none' }}>
        <label htmlFor="bssOption">BSS Option:</label>
        <select id="bssOption">
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
        </select>
      </div>

      <div id="bsaSection" style={{ display: 'none' }}>
        <label htmlFor="bsaOption">BSA Option:</label>
        <select id="bsaOption">
          <option value="">Select a BSA section</option>
          <option value="BSA1">1 - Short title, extent and commencement</option>
          <option value="BSA2">2 - Definitions</option>
          <option value="BSA3">3 - Facts which need to be proved</option>
          <option value="BSA4">4 - Relevancy of facts forming part of same transaction</option>
          <option value="BSA5">5 - Facts which are the occasion, cause or effect of facts in issue</option>
          <option value="BSA6">6 - Motive, preparation and previous or subsequent conduct</option>
          <option value="BSA7">7 - Facts necessary to explain or introduce relevant facts</option>
          <option value="BSA8">8 - Things said or done by conspirator in reference to common design</option>
          <option value="BSA9">9 - Facts necessary to establish identity</option>
          <option value="BSA10">10 - Facts bearing on question whether act was accidental or intentional</option>
          <option value="BSA11">11 - Facts showing existence of state of mind, or of body, or bodily feeling</option>
          <option value="BSA12">12 - Facts bearing on question whether act was committed with particular knowledge or intention</option>
          <option value="BSA13">13 - Facts showing course of business when relevant</option>
          <option value="BSA14">14 - Admissions defined</option>
          <option value="BSA15">15 - Admission by party to proceeding or his agent</option>
        </select>
      </div>
    </div>
      <div className={styles.formgroup}>
        <label htmlFor="specialStatute" style={{color: 'black'}}>Special Statute (if applicable):</label>
        <select id="specialStatute" value={specialStatute} onChange={handleSpecialStatuteChange}>
          <option value="" style={{color: 'black'}}>None</option>
          <option value="cyberCrimes" style={{color: 'black'}}>Cyber Crimes</option>
                    <option value="scstCrimes" style={{color: 'black'}}>Crimes against SC and ST</option>
                    <option value="womenCrimes" style={{color: 'black'}}>Crimes against Women</option>
                    <option value="childrenCrimes" style={{color: 'black'}}>Crimes against Children</option>
                    <option value="stateOffenses" style={{color: 'black'}}>Offenses against the State</option>
                    <option value="economicOffenses" style={{color: 'black'}}>Economic Offenses</option>
                    <option value="foreignerCrimes" style={{color: 'black'}}>Crimes against Foreigners</option>
        </select>
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="imprisonmentYears" style={{color: 'black'}}>Imprisonment (Years):</label>
        <input type="number" id="imprisonmentYears" value={imprisonmentYears} onChange={handleImprisonmentYearsChange} />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="imprisonmentMonths" style={{color: 'black'}}>Imprisonment (Months):</label>
        <input type="number" id="imprisonmentMonths" value={imprisonmentMonths} onChange={handleImprisonmentMonthsChange} />
      </div>
      <div className={styles.checkboxgroup}>
        <div className={styles.checkbox}>
          <input type="checkbox" id="flightRisk" checked={flightRisk} onChange={handleFlightRiskChange} />
          <label htmlFor="flightRisk" style={{color: 'black'}}>Flight Risk</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="riskOfInfluencingWitnesses" checked={riskOfInfluencingWitnesses} onChange={handleRiskOfInfluencingWitnessesChange} />
          <label htmlFor="riskOfInfluencingWitnesses" style={{color: 'black'}}>Risk of Influencing Witnesses</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="familyInJurisdiction" checked={familyInJurisdiction} onChange={handleFamilyInJurisdictionChange} />
          <label htmlFor="familyInJurisdiction" style={{color: 'black'}}>Family in Jurisdiction</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="employed" checked={employed} onChange={handleEmployedChange} />
          <label htmlFor="employed" style={{color: 'black'}}>Employed</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="ownsProperty" checked={ownsProperty} onChange={handleOwnsPropertyChange} />
          <label htmlFor="ownsProperty" style={{color: 'black'}}>Owns Property</label>
        </div>
      </div>
      <button className={styles.btn} onClick={calculateBailEligibility} >Calculate Bail Eligibility</button>
    </div>
  );
};

export default BailReckoner;