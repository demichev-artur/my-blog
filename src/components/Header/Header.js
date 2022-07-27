import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contacts">Контакты</a></li>
                <li><a href="/stock">Акции</a></li>
                <li><a href="/buyers">Покупателям</a></li>
                <li><a href="/news">Новости</a></li>
                <li><a href="/catalog/Iphone">Айфоны</a></li>
                <li><a href="/catalog/MacBook">Макбуки</a></li>
            </ul>
        </div>
    )
}

export default Header;