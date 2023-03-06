import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/admin/Navbar'
import SidebarFilter from '../../components/admin/SidebarFilter'
import TempletsRightSide from '../../components/admin/TempletsRightSide'

const Templates = () => {
  return (
    <>
      <Navbar />
      <Template className="container-fluid">
        <SidebarFilter IsCountry />
        <Cards>
          <TempletsRightSide />
        </Cards>
      </Template>

    </>
  )
}

export default Templates;

const Template = styled.div`
margin-top: 100px;
display: flex;
justify-content: flex-end;
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
