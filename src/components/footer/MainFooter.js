import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoPic from '../../assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const MainFooter = () => {
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
                        <NavLink className="nav-link" to="/"> Home</NavLink>
                        <NavLink className="nav-link" to="/register-company"> Register Company</NavLink>
                        <NavLink className="nav-link" to="/services"> Other Services</NavLink>
                        <NavLink className="nav-link" to="/contact-us"> Contact Us</NavLink>
                    </Navs>
                </FooterNavs>
                <FooterSocial>
                    <p>Copyright © 2022. All Rights Reserved</p>
                    <Social>
                        <Link className="nav-link" to="/">
                            <LinkedInIcon/>
                        </Link>
                        <Link className="nav-link" to="/">
                           <PhoneIcon/>
                        </Link>
                        <Link className="nav-link" to="/">
                           <WhatsAppIcon/>
                        </Link>
                        <Link className="nav-link" to="/">
                          <InstagramIcon/>
                        </Link>
                        <Link className="nav-link" to="/">
                          <FacebookIcon/>
                        </Link>
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
background-color: #DCDCDC;
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
    margin-left: 60px;
    @media (max-width: 800px){
        margin-left: 30px;
}
}

@media (max-width: 600px){
justify-content: center;
width: 100%;
}
`;