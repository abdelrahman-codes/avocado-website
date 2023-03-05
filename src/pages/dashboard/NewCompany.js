import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SidebarFilter from '../../components/admin/SidebarFilter'
import Navbar from '../../components/admin/Navbar'
import RequestCard from '../../components/admin/RequestCard'

const NewCompany = () => {
  const [request, setRequest] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}request`);
    setRequest(data?.request)
  }
  return (
    <>
      <Navbar />
      <Company className="container-fluid">
        <SidebarFilter IsCompany />
        <Cards >

          {request?.map(ele => (
            <RequestCard key={ele._id} country={ele?.country} name={ele?.name} date={ele?.createdAt} companyType={ele?.companyType} id={ele?._id} />
          ))}

        </Cards>
      </Company>
    </>
  )
}

export default NewCompany;

const Company = styled.div`
margin-top: 100px;
position: relative;
display: flex;
justify-content: flex-end;
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
