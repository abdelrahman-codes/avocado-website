import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage';
import MainFooter from './components/footer/MainFooter';
import Services from './pages/services/Services';
import ServiceDetails from './pages/serviceDetails/ServiceDetails';
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/services/:id" element={<ServiceDetails />}></Route>

                {/* Not found page */}
                {/* <Route path="/*" ></Route> */}
            </Routes>
            <MainFooter/>

        </>
    )
}

export default App