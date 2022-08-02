import React from 'react';
import {iPhones} from '../../contants/index';
import {useParams} from 'react-router-dom';
import styles from './Product.module.css';

const Feature = () => {
    const params = useParams();
    let {productFeature} = iPhones[params.name];
    let keys = Object.keys(productFeature);
    let values = Object.values(productFeature);

    const arrayFeature = keys.map((item, i) => (
            <div className={styles.feature}>
                <div className={styles.key}><p>{keys[i]}:</p></div>
                <div className={styles.value}><p>{values[i]}</p></div>
            </div>
        )
    )

    return (
        <>
            {arrayFeature}
        </>
    )
}

const Product = () => {
    const params = useParams();
    let kursUSD = 83;
    let {productImg, productName, productPrice, productDesc} = iPhones[params.name];

    return (
        <section>
            <div className={styles.product}>
                <div className={styles.content}>
                    <div className={styles.img_block}>
                        <img src={productImg} alt=""/>
                    </div>

                    <div className={styles.product_info}>
                        <h1>{productName}</h1>
                        <div className={styles.price}>
                            <span>{productPrice} сом</span>
                            <span>${(productPrice - productPrice % kursUSD) / kursUSD}</span>
                        </div>

                        <div className={styles.buy}>
                            <button>Купить</button>
                            <a href="#">Оформить в кредит</a>
                            <a href="#">Забронировать</a>
                        </div>

                        <div>
                            <h2>Основные характеристики</h2>
                            <p>{productDesc}</p>
                        </div>
                    </div>

                </div>
                <div className={styles.feature_container}>
                    <h3>Характеристики</h3>
                    <Feature/>
                </div>

            </div>

        </section>

    );
};

export default Product;