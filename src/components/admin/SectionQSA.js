import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { set } from '../../slices/questionSlice';

const SectionQSA = ({ QAr, QEn, id ,Ty}) => {
    const [question, setQuestion] = useState("");
    const [questionAr, setQuestionAr] = useState("");
    const [type, setType] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        setQuestion(QEn);
        setQuestionAr(QAr);
        setType(Ty)
    }, [])

    const updateQ = async () => {
        const { data } = await axios.put(`${process.env.REACT_APP_BASE_URL}question/${id}`, {
            question,questionAr,type
        });
        dispatch(set(data.question))
    }
    const deleteQ = async () => {
        const { data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}question/${id}`);
        dispatch(set(data.question))
    }
    return (
        <QSA>
            <div>
                <Row>
                    <label>Qustion title</label>
                    <input type="text" class="form-control" value={question} onChange={(e) => setQuestion(e.target.value)} />
                </Row>
                <Row>
                    <input type="text" class="form-control" value={questionAr} onChange={(e) => setQuestionAr(e.target.value)} />
                    <label>عنوان السوال </label>
                </Row>
            </div>

            {/* <div>
                <Row>
                    <label>Qustion tag</label>
                    <input type="text" class="form-control" />
                </Row>
                <Row>
                    <input type="text" class="form-control" />
                    <label>علامه السوال</label>
                </Row>
            </div> */}

            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name={id} id={`${id}1`} autoComplete="off" onClick={() => setType("pic")} />
                <label class="btn btn-outline-secondary" htmlFor={`${id}1`}>صور</label>

                <input type="radio" class="btn-check" name={id} id={`${id}2`} autoComplete="off" onClick={() => setType("file")} />
                <label class="btn btn-outline-secondary" htmlFor={`${id}2`}>ملفات</label>

                <input type="radio" class="btn-check" name={id} id={`${id}3`} autoComplete="off" onClick={() => setType("text")} />
                <label class="btn btn-outline-secondary" htmlFor={`${id}3`}>كلام</label>
            </div>
            <div className="d-flex justify-content-end m-0">
                <button className="btn btn-outline-danger mx-2" onClick={deleteQ}>حذف</button>
                <button className="btn btn-primary " onClick={updateQ}>حفظ</button>
            </div>
        </QSA>
    )
}

export default SectionQSA;

const QSA = styled.div`
display:flex;
flex-direction:column;
flex-wrap: wrap;
width: 100%;
background-color: #C3C2C5;
padding: 15px;
border-radius: 15px;
margin-bottom: 20px;
>div{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 15px;

}
`;

const Row = styled.div`
width: 50%;
display: flex;
text-align: center;
align-items: center;
padding: 5px;
@media (max-width: 600px) {
    width: 100%;
}

>input{
    padding:10px;
    border-radius: 15px;
}
`;