import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import ImageUploading from 'react-images-uploading';

const LandingPage = () => {

    const [youtubeId, setYouTube] = useState("");
    const [slogan, setSlogan] = useState("");
    const [sloganAr, setSloganAr] = useState("");

    const [headerId, setHeaderId] = useState("")
    const [socialId, setsocialId] = useState("")
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [location, setLocation] = useState("");
    const [map, setMap] = useState("");
    // const [pic, setPic] = useState("");
    const [email, setEmail] = useState("");
    const [saved, setSaved] = useState(false);


    const [loadingSocial, setSocial] = useState(false);
    const [saveSocial, setSaveSocial] = useState(false);

    const [loadingLocImg, setLoadingImg] = useState(false);
    const [saveLocImg, setSaveImg] = useState(false);

    const [imageLocation, setImageLocation] = React.useState([]);
    const onChange = (imageList, addUpdateIndex) => {
        setImageLocation(imageList);
    };
    useEffect(() => {
        fetchHeader();
        fetchSocial();
    }, [])
    const fetchHeader = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}header`);
        setYouTube(data?.header.youtubeId)
        setSlogan(data?.header.slogan)
        setSloganAr(data?.header?.sloganAr)
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
        setMap(data?.Social.map)
        setsocialId(data.Social._id)
    }

    const updateHeader = async () => {
        const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}header/${headerId}`, {
            youtubeId, slogan, sloganAr
        });
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, "5000");
    }
    const updateSocial = async () => {
        setSocial(true);

        const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}social/${socialId}`, {
            facebook, instagram, phone, whatsapp, linkedin, location, email ,map
        });
        // setFacebook(data?.Social.facebook)
        // setInstagram(data?.Social.instagram)
        // setLinkedin(data?.Social.linkedin)
        // setEmail(data?.Social.email)
        // setWhatsapp(data?.Social.whatsapp)
        // setLocation(data?.Social.location)
        // setPhone(data?.Social.phone)
        // setPic(data?.Social.pic)
        // setsocialId(data.Social._id)

        setSocial(false)
        setSaveSocial(true)
        setTimeout(() => {
            setSaveSocial(false)
        }, "5000");

    }
    // const updateLocation = async () => {
    //     if (imageLocation.length) {
    //         setLoadingImg(true)
    //         let formData = new FormData();
    //         formData.append("pic", imageLocation[0].file)
    //         const { data } = await axios.patch(`${process.env.REACT_APP_BASE_URL}social/${socialId}`, formData);
    //         setLoadingImg(false)
    //         setSaveImg(true)
    //         setTimeout(() => {
    //             setSaveImg(false)
    //         }, "5000");
    //     }
    // }
    return (
        <>
            <Landing className="container-fluid" style={{ marginTop: "100px" }}>
                <Container>
                    <Lable>لينك فيديو اليوتيوب</Lable>
                    <Input className="form-control" value={youtubeId} onChange={(e) => setYouTube(e.target.value)} />
                    <Lable>الشعار</Lable>
                    <Input className="form-control" value={slogan} onChange={(e) => setSlogan(e.target.value)} />
                    <Lable>الشعار بالعربي</Lable>
                    <Input className="form-control" value={sloganAr} onChange={(e) => setSloganAr(e.target.value)} />

                    {saved &&
                        <div className="d-flex justify-content-center my-2">
                            <h6 style={{ color: "green" }}>تم الحفظ</h6>
                        </div>
                    }

                    <div className="d-flex justify-content-end">
                        <Button className='my-2 ' onClick={() => updateHeader()}>حفظ</Button>
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

                    <Lable>لينك الموقع</Lable>
                    <Input className="form-control" value={map} onChange={(e) => setMap(e.target.value)} />
                    {saveSocial &&
                        <div className="d-flex justify-content-center my-2">
                            <h6 style={{ color: "green" }}>تم الحفظ</h6>
                        </div>
                    }

                    <div className="d-flex justify-content-end">
                        <Button className='my-2 ' onClick={updateSocial}>{loadingSocial ? "تحميل..." : "حفظ"}</Button>
                    </div>
                </Container>
            </Landing>
            {/* <Landing className="container-fluid">
                <Container >
                    <Lable>صوره لخريطه الموقع</Lable>

                    <ImageUploading
                        multiple
                        value={imageLocation}
                        onChange={onChange}
                        maxNumber={1}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                        }) => (
                            // write your building UI
                            <>
                                {imageList.length != 1 &&
                                    <MainButton
                                        style={isDragging ? { backgroundColor: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Click or Drop here
                                    </MainButton>
                                }
                                {imageList.map((image, index) => (
                                    <ImageContainer key={index} >
                                        <BtnContainer >
                                            <ButtonImg onClick={() => onImageUpdate(index)}>Update</ButtonImg>
                                            <ButtonImg onClick={() => onImageRemove(index)}>Remove</ButtonImg>
                                        </BtnContainer>
                                        <Img src={image['data_url']} alt="" />

                                    </ImageContainer>
                                ))}
                            </>
                        )}
                    </ImageUploading>
                    {saveLocImg &&
                        <div className="d-flex justify-content-center my-2">
                            <h6 style={{ color: "green" }}>تم الحفظ</h6>
                        </div>
                    }
                    <div className="d-flex justify-content-end">
                        <Button className='my-2 ' onClick={updateLocation}>{loadingLocImg ? "تحميل..." : "حفظ"}</Button>
                    </div>
                </Container>
            </Landing> */}
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

const MainButton = styled.button`
border: none;
padding:50px;
border-radius:50px;
width: 100%;
margin-bottom: 20px;
`;
const ImageContainer = styled.div`
width: 100%;
`;
const BtnContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`;
const ButtonImg = styled.button`
border: none;
border-radius: 5px;
margin:5px;
width: 100%;
`;
const Img = styled.img`
height: 250px;
width: 100%;
border-radius: 25px;
margin-bottom: 20px;
margin-top: 20px;
`;
