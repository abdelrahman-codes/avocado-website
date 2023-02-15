import React from 'react'
import styled from 'styled-components';
import MainFooter from '../../components/footer/MainFooter';
import Navbar from '../../components/navbar/Navbar';
import ServiceCard from '../../components/ServiceCard'

const Services = () => {
    return (
        <>
            <Navbar />
            <ServicesContainer className='container'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
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