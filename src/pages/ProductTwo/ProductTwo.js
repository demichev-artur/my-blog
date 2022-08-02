import React from 'react';
import {useParams} from 'react-router-dom';
import {iphones} from '../../constants/iphones';
import styles from './ProductTwo.module.css';


const ProductTwo = () => {
    const params = useParams();
    const product = iphones.find(item => item.id === +params.id);
    console.log(product);

    return (
        <div className={styles.container}>
            <div>
                <img src={product.img} alt=""/>
            </div>
            <div className={styles.info}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
            </div>
        </div>

    );
};

export default ProductTwo;