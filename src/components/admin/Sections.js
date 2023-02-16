import React from 'react'
import styled from 'styled-components';
import { ImageUploader } from './ImageUploader';

const Sections = () => {
    return (
        <Section className="container-fluid">
            <Container>
                <Lable>سكاشن الموقع</Lable>
                <Options>
                    <Option>سكشن 3</Option>
                    <Option>سكشن 2</Option>
                    <Option>سكشن 1</Option>
                </Options>

            </Container>
        </Section>
    )
}

export default Sections;
const Section = styled.div`
display: flex;
justify-content: flex-end;
margin: 30px 0px;
background-color: #DCDCDC;
border-radius:25px;
padding-bottom: 20px;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 50%;
@media (max-width: 1000px) {
width: 75%;
}
@media (max-width: 500px) {
width: 85%;
}
@media (max-width: 400px) {
width: 95%;
}
@media (max-width: 360px) {
width: 100%;
}
`;

const Lable = styled.h6`
width: 100%;
text-align: right;
padding-right: 15px;
margin-top: 20px;
`;
const Options = styled.div`
display: flex;
flex-direction:row;
flex-wrap: wrap ;
justify-content: flex-end;
margin-bottom: 20px;


`;

const Option = styled.div`
padding: 10px 20px;
background-color: #FFFFFF;
border-radius:10px;
margin:0px 0px 10px 10px;
:hover{
    background-color: red;
    cursor: pointer;
}
`;

