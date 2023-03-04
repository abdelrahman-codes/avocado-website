import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServiceFooter = () => {
    const { id } = useParams()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [social, setSocial] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}social`);
        setSocial(data?.Social)
    }

    const contactUs = async () => {
        if (name === "" || email === "" || country === "" || phone === "") {
            setError(true)
        } else {
            setError(false)
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}contact-us`, {
                name, email, country, phone, service: id,
            });
            setSaved(true)
        }
        setLoading(false)
    }
    return (
        <Footer>
            <FooterContainer className="container">
                <FAQ>If you have any qustions or need any help <br />
                    please leave your info and we will contact with you
                </FAQ>

                <FooterContent>

                    <Contact>
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
                            {social?.phone}
                        </ContactDetails>

                        <ContactDetails>
                            <Icon>
                                <LocationOnIcon />
                            </Icon>
                            {social?.location}
                        </ContactDetails>

                    </Contact>

                    <Form>
                        <Input className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <Input className="form-control" placeholder="Phone" type="number" onChange={(e) => setPhone(e.target.value)} />
                        <Input className="form-control" placeholder="Countery" onChange={(e) => setCountry(e.target.value)} />
                        <Input className="form-control" placeholder="Email" type="Email" onChange={(e) => setEmail(e.target.value)} />

                        {error && <Message >Please fill all fields</Message>}
                        {saved
                            ? "We will contact you soon!"
                            : <Button
                                onClick={contactUs}
                            >{loading ? "loading" : "Send"}</Button>
                        }
                    </Form>

                </FooterContent>
            </FooterContainer>

        </Footer>
    )
}

export default ServiceFooter;

const Footer = styled.footer`
background-color: #DCDCDC;
width: 100%;
`;
const FooterContainer = styled.div`
border-bottom: 2px solid #000000;
`;

const FAQ = styled.h4`
text-align: center;
padding: 40px;
font-weight: bold;
@media (max-width: 770px) {
    padding: 20px;
    margin-bottom: 20px;
    font-size: 20px;

}

@media (max-width: 500px) {
    font-size: 18px;

}

`

const FooterContent = styled.div`
flex:  1;
display:flex;
align-items: center;
justify-content:space-between;
margin-bottom: 50px;
@media (max-width: 770px) {
    flex-direction:column-reverse;
align-items: flex-start;

}

`;

const Contact = styled.div`
flex: 1;
`;

const ContactDetails = styled.div`
margin-bottom: 15px;
font-size: 18px;
font-weight: bold;
`;
const Icon = styled.span`
margin-right: 20px;
`;
const Form = styled.div`
flex:.6;
display: flex;
flex-direction: column;
align-items:center;
background-color: #858585;
border-radius:20px;
padding: 25px;
@media (max-width: 1000px) {
    padding: 20px;
}
@media (max-width: 770px) {
width: 100%;
margin-bottom: 40px;

}
@media (max-width: 500px) {
    padding: 10px;

}
`;

const Input = styled.input`
margin-bottom: 15px;
width: 85%;
padding: 13px 10px ;
border-radius: 17px;
@media (max-width: 1000px) {
    width: 85%;
}
@media (max-width: 770px) {
    width: 90%;
padding: 10px ;

}
@media (max-width: 500px) {
    width: 95%;


}
`;
const Button = styled.button`
border: none;
border-radius: 20px;
padding:15px 50px;
font-weight: bold;
font-size:16px;
 `;

const Message = styled.h6`
 color: red;
 `