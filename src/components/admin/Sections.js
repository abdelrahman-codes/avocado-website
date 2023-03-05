import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
const Sections = () => {
    const [section, setSection] = useState([])
    const [loading, setLoading] = useState(1)
    const [deleteSec, setDeleteSec] = useState("")
    useEffect(() => {
        fetchSection();
    }, [loading])
    const fetchSection = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}section`);
        setSection(data?.section)
    }
    const deleteSection = async () => {
        const { data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}section/${deleteSec}`);
        setLoading(loading + 1);
    }
    return (
        <Section className="container-fluid">
            <Container>
                <Lable>سكاشن الموقع</Lable>
                <Options>
                    {section?.map(sec => (
                        <Option data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            key={sec._id}
                            onClick={() => setDeleteSec(sec._id)}
                        >{sec?.title}</Option>
                    ))}
                </Options>

            </Container>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">حذف السيكشن</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" >اغلاق</button>
                            <button
                                onClick={() => deleteSection()}
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                حذف
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default Sections;
const Section = styled.div`
display: flex;
justify-content: flex-end;
margin: 30px 0px;
background-color: #DCDCDC;
border-radius:25px;
padding-bottom: 20px;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 50%;
@media (max-width: 1000px) {
width: 75%;
}
@media (max-width: 500px) {
width: 85%;
}
@media (max-width: 400px) {
width: 95%;
}
@media (max-width: 360px) {
width: 100%;
}
`;

const Lable = styled.h6`
width: 100%;
text-align: right;
padding-right: 15px;
margin-top: 20px;
`;
const Options = styled.div`
display: flex;
flex-direction:row;
flex-wrap: wrap ;
justify-content: flex-end;
margin-bottom: 20px;


`;

const Option = styled.div`
padding: 10px 20px;
background-color: #FFFFFF;
border-radius:10px;
margin:0px 0px 10px 10px;
:hover{
    background-color: red;
    cursor: pointer;
}
`;

