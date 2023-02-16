import React from 'react'
import styled from 'styled-components';
import FilterContnet from './FilterContnet';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const SidebarFilter = ({IsService, IsCountry,IsCompany}) => {
    return (
        <>
            <Container1>
                <FilterContnet IsService={IsService} IsCompany={IsCompany} IsCountry={IsCountry}  />
            </Container1>
            <Container2>
                <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FilterAltIcon/></button>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filter</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <FilterContnet IsService={IsService} IsCompany={IsCompany} IsCountry={IsCountry}/>
                    </div>
                </div>

            </Container2>
        </>
    )
}

export default SidebarFilter;

const Container1 = styled.div`
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