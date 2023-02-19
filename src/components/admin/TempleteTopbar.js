import React from 'react'
import styled from 'styled-components';
import arrowPic from '../../assets/arrow.png'

const TempleteTopbar = ({ county, templete }) => {
    return (
        <Bar>
            <button className="btn btn-secondary px-3">تعديل</button>

            <div>
                <h5>{templete}</h5>
                <img src={arrowPic} alt="arrowPic" />
                <h5>{county}</h5>
                <img src={arrowPic} alt="arrowPic" />
            </div>
        </Bar>
    )
}

export default TempleteTopbar;

const Bar = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: flex-end;
>div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    >img{
        width:40px;
        margin: 20px;
        @media (max-width: 500px) {
        margin: 10px;
            
        }
        @media (max-width: 370px) {
        width:30px;
        }
    }
    >h5{
        @media (max-width: 370px) {
            font-size: 16px;
            text-align: center;
        }
    }
}

`;