import React, { useState } from 'react'
import styled from 'styled-components';
import TempletCard from './TempletCard';

const TempletsRightSide = () => {
    const [remove,setRemove] = useState(false)
    return (
        <Container className="container-fluid">
            <Btn>
                <button className="btn btn-secondary m-2" onClick={()=>{setRemove(true)}}>مسح نموذج</button>
                <button className="btn btn-secondary m-2">اضافه نموذج جديد +</button>
            </Btn>
            <Cards>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="1"/>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="2"/>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="3"/>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="4"/>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="5"/>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="6"/>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="7"/>
                <TempletCard name="نموذج شركات فرديه"  remove={remove} id="8"/>

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