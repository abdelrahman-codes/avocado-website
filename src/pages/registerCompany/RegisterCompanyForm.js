import React from 'react'
import styled from 'styled-components'
import MainFooter from '../../components/footer/MainFooter'
import Navbar from '../../components/navbar/Navbar'
import Pic from '../../assets/ill2.png'
import RegisterCompanyRightSide from '../../components/RegisterCompanyRightSide'
import RegisterCompanyFormSection from '../../components/RegisterCompanyFormSection'
const RegisterCompanyForm = () => {
  return (
    <>
    <Navbar />
    <Company className="container">
        <LeftSide className="shadow">
            <RegisterCompanyFormSection />
        </LeftSide>
        <RegisterCompanyRightSide content2 pic={Pic} />
    </Company>

    <MainFooter />
</>
  )
}

export default RegisterCompanyForm;

const Company = styled.div`
margin-top: 100px;
margin-bottom: 40px;
display: flex;
@media (max-width: 850px) {
  padding:0px 20px ;

}
@media (max-width: 750px) {
  display: block;
}
`;

const LeftSide = styled.div`
width: 70%;
display: flex;
flex-direction: column;
background-color: #FFFFFF;
border-radius:20px;
padding:25px 15px;
@media (max-width: 1000px) {
width: 70%;
}
@media (max-width: 770px) {
  width: 100%;
}
`;