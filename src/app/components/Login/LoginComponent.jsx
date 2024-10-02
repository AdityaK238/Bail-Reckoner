"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebaseConfiguration";  // Import Firebase auth
import styles from "@/app/components/Login/LoginComponent.module.css";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard or another page upon successful login
      console.log("User logged in");
    } catch (err) {
      alert("Failed to log in. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="Email"
            required
            className={styles.inputArea}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputBox}>
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.inputArea}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.btn} type="submit">
          Login
        </button>
        <div className="register-link"><br />
          <p>Don&apos;t have an Account?</p>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
