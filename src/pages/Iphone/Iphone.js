import React from 'react';
import {useParams, Outlet} from "react-router-dom";

const title = {
    textAlign: "center"
}

const Iphone = () => {
    return (
        <Outlet>
            <h1 style={title}>Здесь будут айфоны</h1>
        </Outlet>
    );
};

export default Iphone;