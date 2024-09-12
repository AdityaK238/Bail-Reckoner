"use client"
import React from "react";
import styles from '@/app/components/Login/LoginComponent.module.css';


const LoginComponent = () => {

  return (
    <div className={styles.wrapper}>
      <form>
        <h1>Login for judge</h1>
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
          <p>Dont have an Account? 
              <br /><br />
              <a href="/register/judge">Register as Judge</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/register/prisoner">Register as Prisoner</a>
          
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;