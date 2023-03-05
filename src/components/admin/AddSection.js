import React from 'react'
import styled from 'styled-components';
import { ImageUploader } from './ImageUploader';

const AddSection = () => {
    return (
        <Section className="container-fluid">
            <Container>
                <Lable>عنوان السكشن</Lable>
                <Input className="form-control" />

                <Lable> الوصف</Lable>
                <Input className="form-control" />

                <Lable>الصوره</Lable>
                <ImageUploader />
                <div className="d-flex justify-content-end">
                    <Button className='my-2 '>حفظ</Button>
                </div>
            </Container>
        </Section>
    )
}

export default AddSection;
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
const Input = styled.input`
border-radius: 15px;
`;

const Button = styled.button`
background-color:#00000080;
padding:7px 20px ;
margin-right: 10px;
border-radius: 15px;
border: none;
`;
