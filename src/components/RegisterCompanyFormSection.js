import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImageUploader } from './admin/ImageUploader';
const RegisterCompanyFormSection = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState([]);
    const [question1, setqQuestion1] = useState();
    const [question2, setqQuestion2] = useState();

    const next = () => {

    }
    const previous = () => {
        !answer.length && navigate('/register-company');
    }
    return (
        <Section>
            <h2>Please fill the form</h2>
            <h4>Section one Title</h4>
            <div>
                <h6>Section qustion about the company ?</h6>
                <input className="form-control" type="text" onChange={(e) => { setqQuestion1(e.target.value) }} />
            </div>
            <div>
                <h6>Section question Two requesting images ?</h6>
                <ImageUploader form />
            </div>

            <Btn >
                <button
                    className='btn btn-outline-success mx-3'
                    onClick={() => { previous() }}
                >
                    Previous
                </button>
                <button
                    className='btn btn-success '
                    onClick={() => { next() }}
                >
                    Next
                </button>
            </Btn>

        </Section>
    )
}

export default RegisterCompanyFormSection;

const Section = styled.div`
    >h4{
        border-left: 10px solid #89664C;
        padding: 5px;
        margin-top  :40px ;
        margin-left  :5px ;
    }
       
   >div{
    margin-left:20px;
    margin-top:10px;
    >h6{
        margin-top:20px;
        margin-bottom:15px;
    }
    >input{
        padding:10px;
        border-radius:10px;
        width: 70%;
        @media (max-width: 500px) {
            width: 95%;
        }
        background-color: rgba(217, 217, 217, 0.34);
        :focus{
            background-color: rgba(217, 217, 217, 0.34);
        }
    }
   }

`;
const Btn = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
padding-right: 20px;
`;