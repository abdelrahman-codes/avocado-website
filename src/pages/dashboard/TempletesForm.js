import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/admin/Navbar';
import TempleteSectionForm from '../../components/admin/TempleteSectionForm';
import TempleteTopbar from '../../components/admin/TempleteTopbar';
const TempletesForm = () => {
    return (
        <>
            <Navbar />
            <Templete className='container'>
                <TempleteTopbar county="البلد " templete="عنوان النموذج" />
                <TempleteSectionForm id="_1"/>
                <TempleteSectionForm id="_2"/>
                <TempleteSectionForm id="_3"/>
            </Templete>
        </>
    )
}

export default TempletesForm;

const Templete = styled.div`
margin-top: 100px;
`;

