import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import { Navigate, Route, Routes, } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import Services from './pages/services/Services';
import ServiceDetails from './pages/serviceDetails/ServiceDetails';
import ContactUs from './pages/contactUs/ContactUs';
import Dashboard from './pages/dashboard/Dashboard';
import NewCompany from './pages/dashboard/NewCompany';
import Templates from './pages/dashboard/Templates';
import Contacts from './pages/dashboard/Contacts';
import RegisterCompany from './pages/registerCompany/RegisterCompany';
import Protected from './components/Protected';
import NewCompanyDetail from './pages/dashboard/NewCompanyDetail';
import AdminLogin from './pages/dashboard/AdminLogin';

const App = () => {
    const [isLoggedIn, setisLoggedIn] = useState(null);
    const logIn = () => {
        setisLoggedIn(true);
    };
    const logOut = () => {
        setisLoggedIn(false);
    };
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/services/:id" element={<ServiceDetails />}></Route>
                <Route path="/contact-us" element={<ContactUs />}></Route>
                <Route path="/register-company" element={<RegisterCompany />}></Route>

                {/*  Admin Dashboard*/}
                <Route path='/admin/login' element={<AdminLogin />} />

                <Route path='/admin/main-dashboard'
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </Protected>
                    }
                />

                <Route path='/admin/company-requests'
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <NewCompany />
                        </Protected>
                    }
                />
                <Route path='/admin/templates'
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <Templates />
                        </Protected>
                    }
                />
                <Route path='/admin/contacts'
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <Contacts />
                        </Protected>
                    }
                />

                <Route path='/admin/company-requests/:id'
                    element={
                        <Protected isLoggedIn={isLoggedIn}>
                            <NewCompanyDetail />
                        </Protected>
                    }
                />
                <Route path='*' element={<Navigate to='/' />} />
                {/* <Route path="/admin/main-dashboard" element={<Dashboard />}></Route> */}
                {/* <Route path="/admin/company-requests" element={<NewCompany />}></Route>
                <Route path="/admin/templates" element={<Templates />}></Route>
                <Route path="/admin/contacts" element={<Contacts />}></Route> */}

                {/* Not found page */}

            </Routes>

        </>
    )
}

export default App