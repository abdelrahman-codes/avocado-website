import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RequestCard = ({ name, company, date, email, phone, country, service, companyType, id }) => {
    return (
        (id
            ? <Link className='nav-link' to={`/admin/company-requests/${id}`}>
                <Card className="shadow">
                    <Cardfilter>
                        <Container>{country}</Container>
                        <Container>{service}{companyType}</Container>
                    </Cardfilter>
                    <CardContent>
                        <Name>{name}</Name>
                        <Content>{company}</Content>
                        {email && (<Content>{email}</Content>)}
                        {phone && (<Content>{phone}</Content>)}
                        <Content>{date}</Content>
                    </CardContent>
                </Card>
            </Link>
            : <Card className="shadow">
                <Cardfilter>
                    <Container>{country}</Container>
                    <Container>{service}{companyType}</Container>
                </Cardfilter>
                <CardContent>
                    <Name>{name}</Name>
                    <Content>{company}</Content>
                    {email && (<Content>{email}</Content>)}
                    {phone && (<Content>{phone}</Content>)}
                    <Content>{date}</Content>
                </CardContent>
            </Card>
        )
    )
}

export default RequestCard;

const Card = styled.div`
color: #000000;
width:100%;
margin: 10px;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items:flex-start;
padding: 10px;
@media (max-width: 550px) {
  flex-direction: column-reverse;
align-items:flex-end;

}
`;
const Cardfilter = styled.div`
display: flex ;
justify-content: space-between;
align-items: flex-start;
@media (max-width: 550px) {
width:100%;
justify-content: flex-end;
}
`;
const Container = styled.div`
padding: 10px 20px;
margin: 0px 20px;
border-radius:25px;
min-width:50%;
background-color: #DCDCDC;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 550px) {
    min-width:40%;
    margin: 10px 0px 0px 10px;
}
`;
const CardContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;
const Name = styled.h5``;
const Content = styled.p`
margin-top: 5px;
margin-bottom: 0px;
`;
