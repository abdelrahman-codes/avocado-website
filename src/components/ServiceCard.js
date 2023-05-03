import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const ServiceCard = ({ service }) => {
    const language = useSelector(state => state.language.value)
    return (
        <Link className="nav-link" to={`/services/${service._id}`}>
            <Card >
                <CardTitle>{language === "E" ? service?.title : service?.titleAr}</CardTitle>
                <CardDesc >
                    {language === "E" ? service?.desc : service?.descAr}
                </CardDesc>
            </Card>
        </Link>
    )
}

export default ServiceCard;

const Card = styled.div`
text-align: center;
padding: 25px;
border-radius:20px;
background-color: #5C9E31;
color: #FFFFFF;
margin:20px 25px;

@media (max-width: 900px) {
    margin:20px 15px;
}
`;
const CardTitle = styled.h3`
margin-bottom: 15px;
white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const CardDesc = styled.p`
    max-height: 150px;
    min-height: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
`;