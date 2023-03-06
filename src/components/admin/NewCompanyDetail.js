import React from 'react'
import styled from 'styled-components';

const NewCompanyDetailHeader = ({ name, company, companyType, country, details }) => {
    return (
        <Container className="container-fluid">
            <Content>الاسم : <span>{name}</span></Content>
            <Content>اسم الشركه : <span>{company}</span></Content>
            <Content>نوع الشركه : <span>{companyType}</span></Content>
            <Content>مكان الانشاء : <span>{country}</span></Content>
            <Content>تفاصيل : <br /> <br /></Content>
            {details?.map((ele, index) => (
                <Content1 key={index + ele?.answer}> <h6>{ele?.question}</h6> <br />{ele?.answer} </Content1>
            ))}
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

const Content1 = styled.div`
text-align: right;
width: 70%;
>h6{
    margin: 10px 0px;
    padding:0px;
}
@media (max-width: 768px){
width: 100%;
}
`;