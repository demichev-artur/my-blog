import React from 'react';
import styles from './Contacts.module.css';

const Contacts = (props) => {
    return (
        <div className={styles.contacts}>
            <h1>Страничка контакты</h1>
            <h1>{props.numberOne}</h1>
            <h1>{props.numberTwo}</h1>
        </div>
    );
};

export default Contacts;