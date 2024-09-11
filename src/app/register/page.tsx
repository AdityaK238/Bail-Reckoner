import React from "react";
import Registeration from "@/app/components/Register/Registeration";
import styles from '@/app/register/registeration.module.css';

const register = () => {
    return (
        <div className={styles.registerationHolder}>
            <Registeration></Registeration>
        </div>
        
    )
}

export default register;