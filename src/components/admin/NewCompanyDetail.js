import React from 'react'
import styled from 'styled-components';

const NewCompanyDetailHeader = ({ name, company, companyType, country, details }) => {
    return (
        <Container className="container-fluid">
            <Content>الاسم : <span>{name}</span></Content>
            <Content>اسم الشركه : <span>{company}</span></Content>
            <Content>نوع الشركه : <span>{companyType}</span></Content>
            <Content>مكان الانشاء : <span>{country}</span></Content>
            <Content>تفاصيل : <br /> <br /><span>{details}</span></Content>
        </Container>
    )
}

export default NewCompanyDetailHeader;

const Container = styled.div`
margin-top: 100px;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
`;
const Content = styled.h6`
text-align: right;
width: 70%;
>span{
    font-weight: normal;
}
@media (max-width: 768px){
width: 100%;
}
`;