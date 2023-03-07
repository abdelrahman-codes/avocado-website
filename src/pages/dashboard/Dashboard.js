import React from 'react'
import AddSection from '../../components/admin/AddSection'
import LandingPage from '../../components/admin/LandingPage'
import Navbar from '../../components/admin/Navbar'
import Sections from '../../components/admin/Sections'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <LandingPage />
                <Sections />
                <AddSection />
{/* 
                <Sections />
                <AddSection /> */}
            </div>
        </>
    )
}

export default Dashboard