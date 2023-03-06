import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/admin/Navbar';
import SectionQSA from '../../components/admin/SectionQSA';
import TempleteTopbar from '../../components/admin/TempleteTopbar';
import { set } from '../../slices/questionSlice'
import { set as setSection } from '../../slices/sectionSlice'
const TempletesForm = () => {
    const dispatch = useDispatch();
    let qustion = useSelector(state => state.question.value);
    let section = useSelector(state => state.section.value);
    const [country, setCountry] = useState("")
    const [template, setTemplate] = useState("")
    let { id } = useParams()
    useEffect(() => {
        fetchData();
        fetchSections();
        fetchQ();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}template/${id}`);
        setTemplate(data.template.name)
        setCountry(data.template.country)
    }
    const fetchSections = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}template/section/${id}`);
        dispatch(setSection(data.templateSection))
    }
    const fetchQ = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}question/${id}`);
        dispatch(set(data.question))
    }
    const addQ = async (section) => {
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}question`, {
            question: "null",
            questionAr: "null",
            section,
            template: id,
            type: "text"
        });
        dispatch(set(data.question))
    }
    const deleteSection = async (section) => {
        const { data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}template/section/${section}`);
        dispatch(setSection(data.templateSection))
    }
    return (
        <>
            <Navbar />
            <Templete className='container'>
                <TempleteTopbar county={country} templete={template} id={id} />
                {section?.map(ele => (
                    <div key={ele._id} class="accordion mb-4 " id="accordionExample">
                        <Accordion class="accordion-item ">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${ele.title}`} aria-expanded="false" aria-controls={`${ele.title}`}>
                                    {ele.title}
                                </button>
                            </h2>
                            <div id={`${ele.title}`} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {qustion?.map(item => {
                                        if (item.section === ele._id) {
                                            return <SectionQSA key={item._id} id={item._id} QEn={item.question} QAr={item.questionAr} Ty={item.type} />
                                        }
                                    })}
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <button className="btn btn-danger rounded m-2" onClick={() => deleteSection(ele._id)}>حذف السكشن</button>
                                    <button className="btn btn-primary rounded m-2" onClick={() => addQ(ele._id)}>اضافة</button>
                                </div>
                            </div>
                        </Accordion>
                    </div>
                ))}
            </Templete>
        </>
    )
}

export default TempletesForm;

const Templete = styled.div`
margin-top: 100px;
`;

const Accordion = styled.div`
background-color: #DCDCDC;
border-radius: 20px;
>h2{
    background-color: #DCDCDC;
    border-radius: 20px;
    >button{
        background-color: #DCDCDC;
        border-radius: 20px;
        text-align: right;
        display: flex;
        justify-content: space-between;
    }
}
`;

