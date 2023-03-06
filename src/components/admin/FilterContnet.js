import React, { useState } from 'react'
import styled from 'styled-components';
import CompanyBtn from './CompanyBtn';
import CountryBtn from './CountryBtn';
import ServiceBtn from './ServiceBtn';

const FilterContnet = ({ IsService, IsCountry, IsCompany }) => {
   
    return (
        <Filter>
            {IsService &&
                (<>
                    <Title>نوع الخدمه</Title>
                    <Border />
                    <FilterContent >
                        <ServiceBtn />
                    </FilterContent>
                    <Border />
                    {/* <Title>البلد</Title>
                    <FilterContent >
                        <CountryBtn />
                    </FilterContent>
                    <Border /> */}
                </>
                )
            }
            {IsCompany &&
                (<>
                    <Title>نوع الشركه</Title>
                    <Border />
                    <FilterContent >
                        <CompanyBtn />
                    </FilterContent>
                    <Border />
                    {/* <Title>البلد</Title>
                    <FilterContent >
                        <CountryBtn />
                    </FilterContent>
                    <Border /> */}
                </>)
            }


            {IsCountry && (
                <>
                    <Title>البلد</Title>
                    <Border />

                    <FilterContent >
                        <CountryBtn />
                        

                    </FilterContent>
                    <Border />

                </>

            )}


        </Filter>
    )
}

export default FilterContnet;

const Filter = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;
const Title = styled.div`
font-weight: bold;
margin:10px 0px;
`;
const FilterContent = styled.div`
display: flex;
flex-direction: column;
`;

const Border = styled.div`
width:100%;
height: 1px;
background-color:#000;
margin: 10px 0px;
`;

const Model = styled.div`
z-index:99;
`