import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { ImageUploader } from './ImageUploader';

const LandingPage = () => {

    const [youtubeId, setYouTube] = useState("");
    const [slogan, setSlogan] = useState("");
    const [headerId, setHeaderId] = useState("")
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [location, setLocation] = useState("");
    const [pic, setPic] = useState("");
    const [email, setEmail] = useState("");
    const [saved, setSaved] = useState(false);


    useEffect(() => {
        fetchHeader();
        fetchSocial();
    }, [])
    const fetchHeader = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}header`);
        setYouTube(data?.header.youtubeId)
        setSlogan(data?.header.slogan)
        setHeaderId(data?.header._id)
    }

    const fetchSocial = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}social`);
        setFacebook(data?.Social.facebook)
        setInstagram(data?.Social.instagram)
        setLinkedin(data?.Social.linkedin)
        setEmail(data?.Social.email)
        setWhatsapp(data?.Social.whatsapp)
        setLocation(data?.Social.location)
        setPhone(data?.Social.phone)
        setPic(data?.Social.pic)
    }

    const updateSocial = async () => {
        const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}header/${headerId}`, {
            youtubeId, slogan
        });
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, "5000");
    }
    return (
        <>
            <Landing className="container-fluid" style={{ marginTop: "100px" }}>
                <Container>
                    <Lable>لينك فيديو اليوتيوب</Lable>
                    <Input className="form-control" value={youtubeId} onChange={(e) => setYouTube(e.target.value)} />
                    <Lable>الشعار</Lable>
                    <Input className="form-control" value={slogan} onChange={(e) => setSlogan(e.target.value)} />

                    {saved &&
                        <div className="d-flex justify-content-center my-2">
                            <h6 style={{ color: "green" }}>تم الحفظ</h6>
                        </div>
                    }

                    <div className="d-flex justify-content-end">
                        <Button className='my-2 ' onClick={() => updateSocial()}>حفظ</Button>
                    </div>
                </Container>
            </Landing>
            <Landing className="container-fluid">
                <Container>
                    <Lable> تليفون التواصل</Lable>
                    <Input className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <Lable> تليفون الواتساب</Lable>
                    <Input className="form-control" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />

                    <Lable> ايميل التواصل</Lable>
                    <Input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Lable>فيسبوك</Lable>
                    <Input className="form-control" value={facebook} onChange={(e) => setFacebook(e.target.value)} />

                    <Lable>انستجرام</Lable>
                    <Input className="form-control" value={instagram} onChange={(e) => setInstagram(e.target.value)} />

                    <Lable>لينكيدان</Lable>
                    <Input className="form-control" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />

                    <Lable>الموقع</Lable>
                    <Input className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />

                    <Lable>صوره لخريطه الموقع</Lable>
                    <ImageUploader />
                    <div className="d-flex justify-content-end">
                        <Button className='my-2 '>حفظ</Button>
                    </div>

                    {/* <Lable> البلاد</Lable>
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


                    <Lable> انواع الشركات</Lable>
                    <Options>
                        <Option>الشركة المستحيلة</Option>
                        <Option>الشركة القابضة</Option>
                        <Option>الشركة القابضة</Option>
                        <Option>الشركة المستحيلة</Option>
                    </Options>

                    <Adding>
                        <Button >اضافه</Button>
                        <Input className="form-control" />
                    </Adding> */}



                </Container>

            </Landing>
        </>
    )
}

export default LandingPage;
const Landing = styled.div`
display: flex;
margin-bottom:30px;
justify-content: flex-end;
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
