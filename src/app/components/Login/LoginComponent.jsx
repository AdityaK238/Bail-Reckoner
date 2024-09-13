"use client"
import React from "react";
import styles from '@/app/components/Login/LoginComponent.module.css';


const LoginComponent = () => {

  return (
    <div className={styles.wrapper}>
      <form>
        <h1>Login</h1>
        <div className={styles.inputBox}>
          <input type="text" placeholder="Email" required className={styles.inputArea} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles.inputBox}>
          <input type="password" placeholder="Password" required className={styles.inputArea} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className={styles.roleSelect}>
        </div>
        <button className={styles.btn} type="submit">Login</button>
        <div className="register-link"><br />
          <p>Dont have an Account?</p>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;