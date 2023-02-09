import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>

                {/* Not found page */}
                {/* <Route path="/*" ></Route> */}
            </Routes>
            <MainFooter/>

        </>
    )
}

export default App