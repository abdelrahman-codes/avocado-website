import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Banner = () => {
  const language = useSelector(state => state.language.value)

  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}header`);
    setBanner(data.header)
  }
  return (
    <BannerContainer>
      <BannerContent>
        <Frame>
          <Iframe url={`https://www.youtube.com/embed/${banner?.youtubeId}`}
            width="70%"
            height="85%"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </Frame>
        <BannerDetails>
          <Slogan>{language === "E" ? banner?.slogan : banner?.sloganAr}</Slogan>
          <Link className='nav-link' to='/register-company'>
            <Register >{language === "E" ? "Register company Now" : "سجل الشركة الآن"}</Register>
          </Link>
        </BannerDetails>


      </BannerContent>


    </BannerContainer>
  )
}

export default Banner;
const BannerContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 90px;
`;
const BannerContent = styled.div`
display: flex;
flex: 1;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Frame = styled.div`
flex: 3;
width: 100%;
display: flex;
justify-content:center;
align-items:flex-end;
>iframe{
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 80% !important;
   height: 75%;
  }
}
@media (max-width: 320px) {
  flex: 2;
  }
`;
const BannerDetails = styled.div`
display: flex;
flex: 1;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Register = styled.button`
padding: 20px 35px;
background-color: #699635;
font-size: 16px;
font-weight:500;
border: none;
border-radius: 20px;
color: #000;
`;
const Slogan = styled.h1`
font-size: 30px;
margin-bottom: 20px;
text-align: center;
@media (max-width: 320px) {
  font-size: 22px;
  }
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;