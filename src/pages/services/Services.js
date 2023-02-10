import React from 'react'
import styled from 'styled-components';
import ServiceCard from '../../components/ServiceCard'

const Services = () => {
    return (
        <ServicesContainer className='container'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </ServicesContainer>
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