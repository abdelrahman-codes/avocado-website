import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ContactUsForm from '../../components/ContactUsForm';
import Navbar from '../../components/navbar/Navbar';
import MainFooter from '../../components/footer/MainFooter';
import { useSelector } from 'react-redux';
import Iframe from 'react-iframe';
const ContactUs = () => {
    const language = useSelector(state => state.language.value)
    const [social, setSocial] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}social`);
        setSocial(data?.Social)
    }
    return (
        <>
            <Navbar />
            <Contact className="container">
                {language === "A" &&
                    <>
                        <ContactUsForm />
                        <LeftSide className=" align-items-end" style={{ textAlign: "right" }}>
                            <FAQ >
                                اترك معلوماتك وسنتواصل معك قريبًا أو يمكنك أيضًا الاتصال بنا على

                            </FAQ>
                            <ContactInfo >
                                <ContactDetails>
                                    {social?.phone}
                                    <Icon style={{ marginRight: "0px", marginLeft: "20px", }}>
                                        <PhoneIcon />
                                    </Icon>
                                </ContactDetails>

                                <ContactDetails>
                                    {social?.email}
                                    <Icon style={{ marginRight: "0px", marginLeft: "20px", }}>
                                        <MailIcon />
                                    </Icon>
                                </ContactDetails>

                                <ContactDetails>
                                    {social?.whatsapp}
                                    <Icon style={{ marginRight: "0px", marginLeft: "20px", }}>
                                        <WhatsAppIcon />
                                    </Icon>

                                </ContactDetails>

                                <ContactDetails>
                                    {social?.location}
                                    <Icon style={{ marginRight: "0px", marginLeft: "20px", }}>
                                        <LocationOnIcon />
                                    </Icon>
                                </ContactDetails>

                            </ContactInfo>
                            <Iframe url={social?.map || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0735818916924!2d31.31907222587921!3d30.092078923860104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458154fec93a48d%3A0xf2954309c037d5b4!2sEden%20Spaces!5e0!3m2!1sen!2seg!4v1678306164147!5m2!1sen!2seg"}
                                width="80%"
                                height="250"
                                id=""
                                styles={{ borderRadius: "15px" }}
                                display="block"
                                position="relative"
                            />

                        </LeftSide>
                    </>
                }


                {language === "E" &&
                    <>
                        <LeftSide>
                            <FAQ>
                                leave your information and  we will contact with your soon
                                or you can also contact us on
                            </FAQ>
                            <ContactInfo>
                                <ContactDetails>
                                    <Icon>
                                        <PhoneIcon />
                                    </Icon>
                                    {social?.phone}
                                </ContactDetails>

                                <ContactDetails>
                                    <Icon>
                                        <MailIcon />
                                    </Icon>
                                    {social?.email}
                                </ContactDetails>

                                <ContactDetails>
                                    <Icon>
                                        <WhatsAppIcon />
                                    </Icon>
                                    {social?.whatsapp}

                                </ContactDetails>

                                <ContactDetails>
                                    <Icon>
                                        <LocationOnIcon />
                                    </Icon>
                                    {social?.location}
                                </ContactDetails>

                            </ContactInfo>
                            <Iframe url={social?.map || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0735818916924!2d31.31907222587921!3d30.092078923860104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458154fec93a48d%3A0xf2954309c037d5b4!2sEden%20Spaces!5e0!3m2!1sen!2seg!4v1678306164147!5m2!1sen!2seg"}
                                width="80%"
                                height="250"
                                id=""
                                styles={{ borderRadius: "15px" }}
                                display="block"
                                position="relative"
                            />
                        </LeftSide>
                        <ContactUsForm />
                    </>
                }
            </Contact>
            <MainFooter />
        </>



    )
}

export default ContactUs;

const Contact = styled.div`
margin-top:100px; 
margin-bottom:50px; 
display: flex;
align-items: center;
justify-content:space-between;
width: 100%;
@media (max-width: 770px) {
    flex-direction:column;
align-items: flex-start;

}
`;

const LeftSide = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const FAQ = styled.h4`
font-weight: bold;
padding-bottom: 40px;
width:70%;
@media (max-width: 770px) {
    text-align: center;
width:100%;

}

`;

const ContactInfo = styled.div``;
const ContactDetails = styled.div`
margin-bottom: 15px;
font-size: 18px;
font-weight: bold;
`;
const Icon = styled.span`
margin-right: 20px;
color: #5C9E31;
`;

const Map = styled.img`
width: 100%;
max-width: 400px;
margin-top: 20px;
@media (max-width: 770px) {
    margin-bottom: 40px;
}
`;

