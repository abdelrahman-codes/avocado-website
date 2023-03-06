import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const TempletsRightSide = () => {
    let country = useSelector(state => state.country.value);
    const [remove, setRemove] = useState(false)
    const [template, setTemplate] = useState([]);
    const [name, setname] = useState("");

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}template`);
        setTemplate(data.template)
    }

    const addTemplate = async () => {
        if (name !== "") {
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}template`, {
                name, country
            });
            setTemplate(data.template)
        }


    }
    const deleteTemplate = async (id) => {
        const { data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}template/${id}`);
        setTemplate(data.template)
    }
    return (
        <Container className="container-fluid">
            <Btn>
                <button className="btn btn-secondary m-2" onClick={() => { setRemove(true) }}>مسح نموذج</button>
                <button className="btn btn-secondary m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">اضافه نموذج جديد +</button>
            </Btn>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">اضافه نموذج</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="اسم النموذج" onChange={(e) => setname(e.target.value)} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" >اغلاق</button>
                            <button
                                onClick={() => addTemplate()}
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                اضافة
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Cards>
                {template?.map(ele => {
                    if (ele.country === country) {
                        return <CardContainer key={ele._id} className="m-1 ">
                            {remove && (<span> <DeleteIcon onClick={() => deleteTemplate(ele._id)} /></span>)}
                            <Link className="nav-link" to={`/admin/templates/${ele._id}`}>
                                <Card>
                                    {ele.name}
                                </Card>
                            </Link>
                        </CardContainer>
                    }
                })}
            </Cards>
        </Container>
    )
}

export default TempletsRightSide;
const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`;
const Btn = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: flex-end;
`
const Cards = styled.div`
display:flex;
justify-content: flex-end;
flex-wrap: wrap;
width: 100%;
`;

const CardContainer = styled.div`
position: relative;
transition: all .3s ease;
:hover{
    transform: scale(.9,.9);
}
>span{
    position: absolute;
    top: -7px;
    right: -7px;
    color: red;
    cursor: pointer;
    >svg{
        font-size: 35px;
        transition: all .2s ease;
        :hover{
            transform: rotate(90deg);
        }
    }
}
`

const Card = styled.div`
background-color:#DCDCDC;
border-radius: 20px;
width: 200px;
height: 200px;
margin: 0px;
@media (max-width: 768px) {
    width: 140px;
    height: 140px;
}
@media (max-width: 390px) {
    width: 120px;
    height: 120px;
}
@media (max-width: 360px) {
    width: 100%;
}
display: flex;
justify-content: center;
align-items: center;
text-align: center;
cursor: pointer;
`