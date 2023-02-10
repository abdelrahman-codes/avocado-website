import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServiceCard = () => {
    return (
        <Link className="nav-link" to="/services/aaa">
            <Card>
                <CardTitle>Service title</CardTitle>
                <CardDesc>
                    Service description goes here , this is a text as a place holder fro
                    a breife description for the service so we
                    can know how it will look like at the end
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
background-color: #DCDCDC;
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