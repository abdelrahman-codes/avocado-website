import React from 'react'
import AddSection from '../../components/admin/AddSection'
import AddService from '../../components/admin/AddService'
import LandingPage from '../../components/admin/LandingPage'
import Navbar from '../../components/admin/Navbar'
import Sections from '../../components/admin/Sections'
import Services from '../../components/admin/Services'
const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <LandingPage />
                <Sections />
                <AddSection />
                <Services />
                <AddService />
            </div>
        </>
    )
}

export default Dashboard