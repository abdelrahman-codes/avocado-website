import React from 'react'
import styled from 'styled-components';
import SectionQSA from './SectionQSA';

const TempleteSectionForm = ({ id }) => {
    return (
        <div class="accordion mb-4 " id="accordionExample">
            <Accordion class="accordion-item ">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>
                        {id}
                    </button>
                </h2>
                <div id={`${id}`} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <SectionQSA />
                    </div>
                    <div className="d-flex justify-content-end ">
                        <button className="btn btn-primary rounded-circle m-2">+</button>
                    </div>
                </div>

                

            </Accordion>
            

        </div>
    )
}

export default TempleteSectionForm;

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