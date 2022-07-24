import React from "react";
import styles from './ComponentA.module.css'

const ComponentC = () => {
    return (
        <h1 className={styles.myText}>Component C</h1>
    )
}

const ComponentA = () => {
    return (
        <>
            <ComponentC/>
            <h1 className={styles.myText}>ComponentA</h1>
        </>
    )
}

export default ComponentA;
