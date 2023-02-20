import React from 'react'
import styled from 'styled-components';
import Pic1 from '../assets/egy.png'
import Pic2 from '../assets/KSA.png'
import Pic3 from '../assets/FRC.png'
import Pic4 from '../assets/UAE.png'
import Pic5 from '../assets/GZA.png'
import Pic6 from '../assets/empty.png'
import { useNavigate } from 'react-router-dom';

const CompanyLocation = () => {
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
                <div id="egy" onClick={(e) => { SaveCounter(e.target.id) }}>
                    <img id="egy" src={Pic1} alt="egy" onClick={(e) => { SaveCounter(e.target.id) }} />
                </div>
                <div id="KSA" onClick={(e) => { SaveCounter(e.target.id) }}>
                    <img id="KSA" src={Pic2} alt="KSA" onClick={(e) => { SaveCounter(e.target.id) }} />
                </div>
                <div id="FRC" onClick={(e) => { SaveCounter(e.target.id) }}>
                    <img id="FRC" src={Pic3} alt="FRC" onClick={(e) => { SaveCounter(e.target.id) }} />
                </div>
                <div id="UAE" onClick={(e) => { SaveCounter(e.target.id) }}>
                    <img id="UAE" src={Pic4} alt="UAE" onClick={(e) => { SaveCounter(e.target.id) }} />
                </div>
                <div id="GZA" onClick={(e) => { SaveCounter(e.target.id) }}>
                    <img id="GZA" src={Pic5} alt="GZA" onClick={(e) => { SaveCounter(e.target.id) }} />
                </div>
                <div id="empty" onClick={(e) => { SaveCounter(e.target.id) }}>
                    <img id="empty" src={Pic6} alt="empty" onClick={(e) => { SaveCounter(e.target.id) }} />
                </div>
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