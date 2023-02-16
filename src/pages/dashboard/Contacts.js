import React from 'react'
import styled from 'styled-components'
import SidebarFilter from '../../components/admin/SidebarFilter'
import Navbar from '../../components/admin/Navbar'
import RequestCard from '../../components/admin/RequestCard'

const Contacts = () => {
  return (
    <>
      <>
        <Navbar />
        <Service className="container-fluid">
          <SidebarFilter IsService/>
          <Cards >
            <RequestCard company="manifasto" country="مصر" name="مهاب سعيد" date="20/12/2022 - 5:32 PM" service="خدمه 1" phone="201015756658" email="Testtest@gmail.com" />
            <RequestCard company="manifasto" country="مصر" name="مهاب سعيد" date="20/12/2022 - 5:32 PM" service="خدمه 1" phone="201015756658" email="Testtest@gmail.com" />
            <RequestCard company="manifasto" country="مصر" name="مهاب سعيد" date="20/12/2022 - 5:32 PM" service="خدمه 1" phone="201015756658" email="Testtest@gmail.com" />
          </Cards>
        </Service>
      </>
    </>
  )
}

export default Contacts;

const Service = styled.div`
margin-top: 100px;
display: flex;
padding:0px 40px ;
@media (max-width: 850px) {
  padding:0px 20px ;

}
@media (max-width: 750px) {
  display: block;
}
`;
const Cards = styled.div`
width: 80%;
display: flex;
flex-direction: column;
border-radius: 10px;
@media (max-width: 1000px) {
width: 70%;
  
}
@media (max-width: 750px) {
  width: 100%;
}
`;
