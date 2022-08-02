import React from 'react';
import {Link} from 'react-router-dom';

const title = {
    textAlign: "center"
}

const CatalogTwo = () => {
    return (
        <div>
            <h1 style={title}>Каталог Два</h1>
            <ul>
                <li><Link to="/productTwo/1">iPhone 13 Pro Max</Link></li>
                <li><Link to="/productTwo/2">iPhone 13 Pro</Link></li>
                <li><Link to="/productTwo/3">iPhone 13</Link></li>
                <li><Link to="/productTwo/4">iPhone 13 Mini</Link></li>
                <li><Link to="/productTwo/5">iPhone 12</Link></li>
            </ul>
        </div>
    );
};

export default CatalogTwo;