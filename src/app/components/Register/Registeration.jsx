"use client";
import styles from "@/app/components/Register/Registeration.module.css";

const Registeration = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="johndoe@example.com"
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="●●●●●●●●"
        />

        <label className={styles.label} htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
          placeholder="●●●●●●●●"
        />

        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registeration;
