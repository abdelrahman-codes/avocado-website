import React from 'react'
import styled from 'styled-components';
import FilterContnet from './FilterContnet';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const SidebarFilter = ({ IsService, IsCountry, IsCompany }) => {
    return (
        <>
            <Container1>
                <FilterContnet IsService={IsService} IsCompany={IsCompany} IsCountry={IsCountry} />
            </Container1>
            <Container2>

                <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                   <FilterAltIcon/>
                </button>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <FilterContnet IsService={IsService} IsCompany={IsCompany} IsCountry={IsCountry} />
                    </div>
                </div>

              

            </Container2>
        </>
    )
}

export default SidebarFilter;

const Container1 = styled.div`
position:fixed;
left:0px;
width: 20%;
@media (max-width: 1000px) {
width: 30%;
}
@media (max-width: 750px) {
  display: none;
}
`;
const Container2 = styled.div`
display: none;
@media (max-width: 750px) {
  display: block;
}
`;