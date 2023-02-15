import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import Services from './pages/services/Services';
import ServiceDetails from './pages/serviceDetails/ServiceDetails';
import ContactUs from './pages/contactUs/ContactUs';
import Dashboard from './pages/dashboard/Dashboard';
import NewCompany from './pages/dashboard/NewCompany';
import Templates from './pages/dashboard/Templates';
import Contacts from './pages/dashboard/Contacts';
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/services/:id" element={<ServiceDetails />}></Route>
                <Route path="/contact-us" element={<ContactUs />}></Route>

                <Route path="/admin/main-dashboard" element={<Dashboard />}></Route>
                <Route path="/admin/company-requests" element={<NewCompany />}></Route>
                <Route path="/admin/templates" element={<Templates />}></Route>
                <Route path="/admin/contacts" element={<Contacts />}></Route>

                {/* Not found page */}
                {/* <Route path="/*" ></Route> */}
            </Routes>

        </>
    )
}

export default App