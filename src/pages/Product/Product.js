import React from 'react';
import {iPhones} from '../../contants/index';
import {useParams} from 'react-router-dom';

const title = {
    textAlign: "center"
}

const Product = () => {
    const params = useParams();
    console.log(useParams());

    return (
        <div>

            <h1 style={title}>Эта страничка продукта: {params.name}</h1>
            <img src={iPhones[0].productImg} alt=""/>
        </div>
    );
};

export default Product;