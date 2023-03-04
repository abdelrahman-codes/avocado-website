import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import MainFooter from '../../components/footer/MainFooter';
import Navbar from '../../components/navbar/Navbar';
import ServiceCard from '../../components/ServiceCard'

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}service`);
        setService(data?.service)
    }
    return (
        <>
            <Navbar />
            <ServicesContainer className='container'>
                {service?.map(ele => (
                    <ServiceCard key={ele._id} service={ele} />
                ))}
            </ServicesContainer>
            <MainFooter />

        </>

    )
}

export default Services;

const ServicesContainer = styled.div`
margin-top: 90px;
display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 500px) {
display: block;
}
`;