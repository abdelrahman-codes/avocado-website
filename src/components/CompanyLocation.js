import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CompanyLocation = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}country`);
        setCountry(data?.countrys)
    }
    const navigate = useNavigate();
    const SaveCounter = (country) => {
        localStorage.setItem("AvocadoCountry", country)
        navigate('/register-company-form')
    }
    return (
        <Container>
            <h1>Register Company</h1>
            <p>Choose company location</p>
            <p> Where do you want to form this company?</p>

            <Row>
                {country?.map(ele => (
                    <div key={ele._id} id={ele.name} onClick={(e) => { SaveCounter(e.target.id) }}>
                        <img id={ele.name} src={process.env.REACT_APP_COUNTRY_IMAGES + ele.pic} alt={ele.name} onClick={(e) => { SaveCounter(e.target.id) }} />
                    </div>
                ))}
            </Row>

        </Container>
    )
}

export default CompanyLocation;

const Container = styled.div`
width: 100%;
>h1{
    font-size:35px;
    margin-bottom: 20px;
    @media (max-width:500px) {
    font-size:25px;
    }
}
>p{
    margin-bottom: 10px;
    @media (max-width:500px) {
    font-size:14px;
    }
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
@media (max-width: 360px) {
justify-content: center;
           
}

>div{
    background-color: #699635;
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
    width: 230px;
    height: 230px;
    display: flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    >img {
        width: 150px;
        @media (max-width: 1000px) {
        width: 120px;
        @media (max-width: 475px) {
            width: 100px;
        }
        @media (max-width: 360px) {
            width: 150px;
        }
    }
    }
    @media (max-width: 1000px) {
        width: 180px;
        height: 180px;
        margin-left: 10px;
        margin-right: 10px;
    }

    @media (max-width: 475px) {
        width: 135px;
        height: 135px;
        margin-left: 5px;
        margin-right: 5px;
        padding: 10px;
    }
    @media (max-width: 360px) {
    width: 200px;
    height: 200px;
    }
}
`;