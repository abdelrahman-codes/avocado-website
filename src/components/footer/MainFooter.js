import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoPic from '../../assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useSelector } from 'react-redux';
const MainFooter = () => {
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
        <Footer >
            <FooterContainer className="container">
                <FooterNavs>
                    <Link className="nav-link" to="/">
                        <Logo
                            src={logoPic}
                            alt="logoPic"
                        />
                        Avocado
                    </Link>

                    <Navs>
                        <NavLink className="nav-link" to="/register-company">{language === "E" ? "Register Company" : "تسجيل شركة"} </NavLink>
                        <NavLink className="nav-link" to="/services">{language === "E" ? "Other Services" : "خدمات اخري"} </NavLink>
                        <NavLink className="nav-link" to="/contact-us">{language === "E" ? "Contact Us" : "تواصل معنا"} </NavLink>
                    </Navs>
                </FooterNavs>
                <FooterSocial>
                    <p>{language === "E" ? "Copyright © 2023. All Rights Reserved" : "حقوق الطبع والنشر © 2023. جميع الحقوق محفوظة"}</p>
                    <Social>
                        <a className="nav-link" href={social?.linkedin} target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a className="nav-link" href={`tel:${social?.phone}`} target="_blank" rel="noopener noreferrer">
                            <PhoneIcon />
                        </a>
                        <a className="nav-link" href={`tel:${social?.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                        </a>
                        <a className="nav-link" href={social?.instagram} target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <a className="nav-link" href={social?.facebook} target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                    </Social>
                </FooterSocial>

            </FooterContainer>


        </Footer>
    )
}

export default MainFooter;

const Footer = styled.footer`
padding-top: 90px;
padding-bottom: 90px;
background-color: #5E432B;
color: #F5F5DC;
`;
const FooterContainer = styled.div`
@media (max-width:600px){
/* padding-left: 30px; */
    
}
`;
const FooterNavs = styled.div`
display:flex;
width: 100%;
justify-content:space-between;
align-items: center;
margin-bottom:20px;
@media (max-width: 600px){
flex-direction: column;
/* align-items: flex-start; */


}

`;
const Navs = styled.div`
display: flex;
align-items:center;
>a{
    padding: 0px 10px;
    @media (max-width: 600px){
    padding: 10px 10px;
    font-size: 15px;
        
}
}
@media (max-width: 570px){
font-size: 15px;

}
@media (max-width: 600px){
flex-direction: column;
align-items:flex-start;
width: 100%;

}
`;
const Logo = styled.img``;
const FooterSocial = styled.div`
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 600px){
flex-direction: column;
margin-top: 25px;
>p{
padding-left: 10px;

}
}

`;
const Social = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
width: 50%;
>a{
    background-color: #89664C;
    border-radius:100%;
    padding: 7px;
    margin-left: 40px;
    @media (max-width: 800px){
        margin-left: 15px;
}
}

@media (max-width: 600px){
justify-content: center;
width: 100%;
}
`;