import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Stock from "./pages/Stock/Stock";
import Buyers from "./pages/ Buyers/Buyers";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Iphone from "./pages/Iphone/Iphone";
import MacBook from "./pages/MacBook/MacBook";
import Product from "./pages/Product/Product";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main pageName="Главная страничка"/>}/>
                    <Route path="/about" element={<About text="Здесь должна быть информация о нас"/>}/>
                    <Route path="/contacts" element={<Contacts numberOne="+996555123456" numberTwo="+996777556677"/>}/>
                    <Route path="/stock" element={<Stock/>}/>
                    <Route path="/buyers" element={<Buyers/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/catalog" element={<Catalog/>}>
                        <Route path="iphone" element={<Iphone/>}/>
                        <Route path="macBook" element={<MacBook/>}/>
                    </Route>
                    <Route path="/product/:name" element={<Product/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

/*
localhost:3000/catalog - Catalog
localhost:3000/catalog/iphone - IPhone
localhost:3000/catalog/macBook - Macbook
*/

export default App;
