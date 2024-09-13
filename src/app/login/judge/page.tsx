import React from "react";
import LoginComponent from "@/app/components/Login/LoginComponent";
import styles from '@/app/login/login.module.css'



const Login = () => {
    
    return (
        <div className={styles.loginHolder}>
                <LoginComponent></LoginComponent>
        </div>
    )
}

export default Login