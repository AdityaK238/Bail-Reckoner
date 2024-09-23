"use client"
import React, { useState } from 'react';

const BailApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    policeStation: '',
    dateOfIncident: '',
    location: '',
    incidentDetails: '',
    otherConfessions: '',
    involvedParties: '',
    applyingTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add logic here to handle form submission, e.g., sending data to a server.
  };

  return (
    <div className="bail-application">
      <h2>Bail Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        </div>
        {/* Add other fields similarly */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BailApplication;
