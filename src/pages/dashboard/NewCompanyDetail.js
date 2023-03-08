import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FilesSection from '../../components/admin/FilesSection'
import Navbar from '../../components/admin/Navbar'
import NewCompanyDetailHeader from '../../components/admin/NewCompanyDetail'
import styled from 'styled-components'

const NewCompanyDetail = () => {
    const [files, setFiles] = useState([])
    const [pics, setPics] = useState([])
    let { id } = useParams()
    const [request, setRequest] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}request/${id}`);
        setRequest(data?.request)
        const arr1 = [], arr2 = []

        setFiles(arr2)
        setPics(arr1)
    }
    return (
        <>
            <Navbar />
            <NewCompanyDetailHeader name={request?.name} company={request?.companyName} companyType={request?.companyType} country={request?.country} details={request?.details} />
            <Files className='container'>
                {request?.files?.map((file, index) => {
                    if (file.includes(".png") || file.includes(".jpeg") || file.includes(".jpg")) {
                    } else {
                        return <FilesSection key={file + index} file={file} />;

                    }
                })}
            </Files>

            <Files className='container'>
                {request?.files?.map((file, index) => {
                    if (file.includes(".png") || file.includes(".jpeg") || file.includes(".jpg")) {
                        return <FilesSection key={file + index} pic={file} />;
                    }
                })}
            </Files>

            {/* <FilesSection pics={pics} /> */}

        </>
    )
}

export default NewCompanyDetail;

const Files = styled.div`
background-color: #DCDCDC;
width: 70%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
border-radius: 25px;
margin-top: 25px;
@media (max-width: 768px) {
    width: 90%;
}
>a{
    text-decoration: none;
    text-align: center;
    color: #000;
    margin: 20px;
    transition: all 0.3s ease;
    :hover{
        transform: scale(.9,.9);
    }

}
`;