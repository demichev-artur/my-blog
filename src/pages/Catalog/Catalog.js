import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Catalog.module.css';

const Catalog = () => {
    return (
        <div className={styles.container}>

            <div className={styles.card}>

                <NavLink to="iphone">
                    <img src="https://www.istore.kg/media/category/iphones.webp" alt=""/>
                    <div className={styles.title}>
                        <p>iPhone</p>
                        <a href="">перейти ></a>
                    </div>
                </NavLink>

            </div>

            <div className={styles.card}>

                <NavLink to="macBook">
                    <img src="https://www.istore.kg/media/category/macs_GvfhGiG.webp" alt=""/>
                    <div className={styles.title}>
                        <p>MacBook</p>
                        <a href="">перейти ></a>
                    </div>
                </NavLink>

            </div>

        </div>
    );
};

export default Catalog;