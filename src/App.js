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

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/stock" element={<Stock/>}/>
                    <Route path="/buyers" element={<Buyers/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
