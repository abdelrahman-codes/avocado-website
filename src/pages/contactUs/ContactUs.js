import React from 'react'
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import mapPic from '../../assets/map.png'
import ContactUsForm from '../../components/ContactUsForm';
const ContactUs = () => {
    return (
        <Contact className="container">
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
                        +20 1559784456
                    </ContactDetails>

                    <ContactDetails>
                        <Icon>
                            <MailIcon />
                        </Icon>
                        Msaid@manifasto.com
                    </ContactDetails>

                    <ContactDetails>
                        <Icon>
                            <WhatsAppIcon />
                        </Icon>
                        +20 1559784456
                    </ContactDetails>

                    <ContactDetails>
                        <Icon>
                            <LocationOnIcon />
                        </Icon>
                        8 omar biker  - masr al gdeda
                    </ContactDetails>

                </ContactInfo>
                <Map
                    src={mapPic}
                    alt="location image"
                />
            </LeftSide>

            <ContactUsForm />
        </Contact>

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
`;

const Map = styled.img`
width: 100%;
max-width: 400px;
margin-top: 20px;
@media (max-width: 770px) {
    margin-bottom: 40px;
}
`;

