import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Catalog.module.css';

const title = {
    textAlign: "center"
}

const Catalog = () => {
    return (
        <div className={styles.container}>
            <h1 style={title}>Каталог</h1>
            <ul>
                <li><Link to="/product/iphone-13-pro-max">iPhone 13 Pro Max</Link></li>
                <li><Link to="/product/iphone-13-pro">iPhone 13 Pro</Link></li>
                <li><Link to="/product/iphone-13">iPhone 13</Link></li>
                <li><Link to="/product/iphone-13-mini">iPhone 13 Mini</Link></li>
                <li><Link to="/product/iphone-12">iPhone 12</Link></li>
            </ul>
        </div>
    );
};

export default Catalog;