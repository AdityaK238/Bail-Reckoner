"use client"
import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FIRRegistration = () => {
  const [formData, setFormData] = useState({
    location: { city: "", district: "", state: "" },
    complaintType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["city", "district", "state"].includes(name)) {
      setFormData((prevData) => ({
        ...prevData,
        location: {
          ...prevData.location,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleComplaintChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      complaintType: e.target.value,
    }));
  };

  const generateIPCSection = () => {
    const ipcSections = {
      "loss/theft": "IPC Section 379",
      violence: "IPC Section 323",
      "fraud/scam": "IPC Section 420",
    };
    return ipcSections[formData.complaintType] || "Unknown IPC Section";
  };

  const handleSubmit = () => {
    if (!formData.complaintType) {
      alert("Please select a complaint type");
      return;
    }
    const ipcSection = generateIPCSection();
    alert(`FIR Generated with IPC Section: ${ipcSection}`);
  };

  const handleBail = () => {
    window.location.href = "/bail-application"; // Adjust according to your routing
  };

  // Generate PDF of FIR form
  const generatePDF = () => {
    const formElement = document.querySelector(".fir-registration");
    if (!formElement) return;
    html2canvas(formElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("FIR_Registration.pdf");
    });
  };

  return (
    <div className="fir-registration">
      <h2>Online FIR Case Registration</h2>
      <div className="help-box">
        <p>
          Need help? Visit the <a href="/bail-reckoner">Bail Reckoner</a> page
          or use our chatbot.
        </p>
      </div>
      <form>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.location.city} onChange={handleChange} />
        </div>
        <div>
          <label>District:</label>
          <input type="text" name="district" value={formData.location.district} onChange={handleChange} />
        </div>
        <div>
          <label>State:</label>
          <input type="text" name="state" value={formData.location.state} onChange={handleChange} />
        </div>
        <div>
          <label>Complaint Type:</label>
          <select name="complaintType" value={formData.complaintType} onChange={handleComplaintChange}>
            <option value="">Select Complaint Type</option>
            <option value="loss/theft">Loss/Theft</option>
            <option value="violence">Violence</option>
            <option value="fraud/scam">Fraud/Scam</option>
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>
          Frame an FIR
        </button>
        <button type="button" onClick={handleBail}>
          Apply for BAIL
        </button>
        <button type="button" onClick={generatePDF}>
          Download FIR as PDF
        </button>
      </form>
      <div className="documents-list">
        <h3>Documents Required:</h3>
        <ul>
          <li>ID Proof</li>
          <li>Address Proof</li>
          <li>Incident Report</li>
        </ul>
      </div>
    </div>
  );
};

export default FIRRegistration;
