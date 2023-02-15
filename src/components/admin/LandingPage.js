import React from 'react'
import styled from 'styled-components';

const LandingPage = () => {
    return (
        <Landing className="container-fluid">
            <Container>
                <Lable>لينك فيديو اليوتيوب</Lable>
                <Input className="form-control" />

                <Lable> تليفون التواصل</Lable>
                <Input className="form-control" />

                <Lable> تليفون الواتساب</Lable>
                <Input className="form-control" />

                <Lable> ايميل التواصل</Lable>
                <Input className="form-control" />


                <Lable> البلاد</Lable>
                <Options>
                    <Option>مصر</Option>
                    <Option>مصر</Option>
                    <Option>مصر</Option>
                    <Option>مصر</Option>
                    <Option>مصر</Option>
                    <Option>مصر</Option>
                    <Option>مصر</Option>
                    <Option>مصر</Option>
                </Options>

                <Adding>
                    <Button >اضافه</Button>
                    <Input className="form-control" />
                </Adding>

                <Lable>وصف الموقع</Lable>
                <Input className="form-control" />

                <Lable>صوره لخريطه الموقع</Lable>
                <Button >حفظ</Button>

            </Container>

        </Landing>
    )
}

export default LandingPage;
const Landing = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 100px;
background-color: #DCDCDC;
border-radius:25px
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 50%;
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
`;

const Adding = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
margin-bottom: 20px;
`
const Button = styled.button`
background-color:#00000080;
padding:7px 20px ;
margin-right: 10px;
border-radius: 15px;
border: none;
`;
