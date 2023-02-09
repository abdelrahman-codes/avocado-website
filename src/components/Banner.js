import React from 'react'
import Iframe from 'react-iframe'
import styled from 'styled-components'
const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Frame>
          <Iframe url="https://www.youtube.com/embed/RODioSM4gLY"
            width="70%"
            height="85%"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </Frame>
        <BannerDetails>
          <Slogan>Lorem ipsum dolor sit amet, consectetur.</Slogan>
          <Register >Register company Now</Register>
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
  @media (max-width: 390px) {
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
background-color: #DCDCDC;
font-size: 16px;
font-weight:500;
border: none;
border-radius: 20px;

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