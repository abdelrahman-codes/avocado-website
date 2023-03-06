import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
const TempletCard = ({ name, remove, id }) => {
    const deleteTemplate = async () => {
        const { data } = await axios.delete(`${process.env.REACT_APP_BASE_URL}template/${id}`);
    }
    return (
        <Container className="m-1 ">
            {remove && (<span> <DeleteIcon onClick={deleteTemplate} /></span>)}
            <Link className="nav-link" to={`/admin/templates/${id}`}>
                <Card>
                    {name}
                </Card>
            </Link>
        </Container>
    )
}

export default TempletCard;
const Container = styled.div`
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