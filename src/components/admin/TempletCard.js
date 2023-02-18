import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
const TempletCard = ({ name, remove }) => {
    return (
        <Card>
            {name}
            {remove && (<span> <DeleteIcon /></span>)}
        </Card>
    )
}

export default TempletCard;

const Card = styled.div`
background-color:#DCDCDC;
border-radius: 20px;
width: 200px;
height: 200px;
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
margin: 10px;
position: relative;
transition: all .3s ease;
cursor: pointer;
:hover{
    transform: scale(.9,.9);
}
>span{
    position: absolute;
    top: -7px;
    right: -7px;
    color: red;
    cursor: pointer;
}
`