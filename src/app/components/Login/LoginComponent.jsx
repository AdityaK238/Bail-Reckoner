"use client"

import React from "react"
import styles from '@/app/components/Login/LoginComponent.module.css'
import { useState, useEffect } from "react";
import {useRouter} from 'next/navigation'
import { UserAuth } from "@/lib/firebase/authContext";

const LoginComponent = () =>{

    const router = useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {user, signIn} = UserAuth();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);
    
      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signIn(email, password);
          router.push('/');
        } catch (err) {
          console.log(err)
        }
      };

    return (
    <div className={styles.wrapper}>
        <form onSubmit={handleLogin}>
            <h1>Login for Judges</h1>
            <div className={styles.inputBox}>
                <input type="text" placeholder="Email" required className={styles.inputArea} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputBox}>
                <input type="password" placeholder="Password" required className={styles.inputArea} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className={styles.btn} type="submit">Login</button>
            <div className="register-link">
                <p>Dont have an Account? <a href="/register">Register</a></p>
            </div>
        </form>
        </div>

        
    )
}
export default LoginComponent