import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import MainFooter from '../../components/footer/MainFooter';
import ServiceFooter from '../../components/footer/ServiceFooter';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ServiceDetails = () => {
    const language = useSelector(state => state.language.value)

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
            <Details style={language === "E" ? { textAlign: "left" } : { textAlign: "right" }} className="container">
                {language === "E" ? service?.desc : service?.descAr}
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
border-bottom:2px solid black ;
`;