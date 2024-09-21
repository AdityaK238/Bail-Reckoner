"use client"
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebaseConfiguration";
import styles from "@/app/components/Register/Registeration.module.css";

const Registeration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success message

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Create a new user with Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User successfully registered:", userCredential.user); // Log user info
      setSuccess("User successfully registered!");
    } catch (err) {
      console.error("Firebase Error:", err.message); // Log any errors from Firebase
      setError(err.message || "Failed to create user. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={handleRegister}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="Email"
          required
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="●●●●●●●●"
          required
        />

        <label className={styles.label} htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
          placeholder="●●●●●●●●"
          required
        />

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registeration;
