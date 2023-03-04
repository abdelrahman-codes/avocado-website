import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import MainFooter from '../../components/footer/MainFooter';
import ServiceFooter from '../../components/footer/ServiceFooter';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    let { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}service/${id}`);
        setService(data?.service)
    }
    return (
        <>
            <Navbar />
            <Details className="container">
                {service?.desc}
            </Details>
            <ServiceFooter />
            <MainFooter />
        </>

    )
}

export default ServiceDetails;
const Details = styled.div`
margin-top: 100px;
margin-bottom: 50px;
min-height:50vh;
`;