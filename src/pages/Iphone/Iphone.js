import React from 'react';
import {NavLink} from "react-router-dom";
import {iPhones} from "../../constants";
import styles from "./Iphone.module.css";

const kursUSD = 82;

const Iphone = () => {
    const values = Object.values(iPhones);
    const keys = Object.keys(iPhones);

    const newArr = values.map((item, i) => (
        <div className={styles.card}>
            <NavLink className={styles.links} to={keys[i]}>
                <img src={item.productImg} alt=""/>
                <h1>{item.productName}</h1>
            </NavLink>

            <p className={styles.price}>от {item.productPrice} сом</p>
            <p className={styles.price_usd}>${(item.productPrice - item.productPrice % kursUSD) / kursUSD}</p>
            <button className={styles.btn}>В корзину</button>
        </div>
    ))

    return (
        <div className={styles.container}>
            {newArr}
        </div>
    );
};

export default Iphone;