import React, { useState } from 'react'
import styled from 'styled-components';
import CompanyBtn from './CompanyBtn';
import CountryBtn from './CountryBtn';
import ServiceBtn from './ServiceBtn';

const FilterContnet = ({ IsService, IsCountry, IsCompany, countryName, id, list }) => {
    const [country, setCountry] = useState("EGY");
    return (
        <Filter>
            {IsService &&
                (<>
                    <Title>نوع الخدمه</Title>
                    <FilterContent >
                        <ServiceBtn />
                    </FilterContent>
                    <Border />
                    <Title>البلد</Title>
                    <FilterContent >
                        <CountryBtn />
                    </FilterContent>
                    <Border />
                </>
                )
            }
            {IsCompany &&
                (<>
                    <Title>نوع الشركه</Title>
                    <FilterContent >
                        <CompanyBtn />
                    </FilterContent>
                    <Border />
                    <Title>البلد</Title>
                    <FilterContent >
                        <CountryBtn />
                    </FilterContent>
                    <Border />
                </>)
            }


            {IsCountry && (
                <>
                    <Title>البلد</Title>
                    <Border />

                    <FilterContent >
                        <input type="radio" name="country" className="btn-check" id="EGY" autoComplete="off" onClick={(e) => { setCountry(e.target.id) }} />
                        <label className="btn btn-outline-secondary my-1" htmlFor="EGY">مصر</label>

                        <input type="radio" name="country" className="btn-check" id="UAE" autoComplete="off" onClick={(e) => { setCountry(e.target.id) }} />
                        <label className="btn btn-outline-secondary my-1" htmlFor="UAE">الامارات</label>

                        <input type="radio" name="country" className="btn-check" id="Moraco" autoComplete="off" onClick={(e) => { setCountry(e.target.id) }} />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Moraco">المغرب</label>

                        <input type="radio" name="country" className="btn-check" id="KSA" autoComplete="off" onClick={(e) => { setCountry(e.target.id) }} />
                        <label className="btn btn-outline-secondary my-1" htmlFor="KSA">السعوديه</label>


                        <button className="btn btn-outline-secondary my-1" data-bs-toggle="modal" data-bs-target="#exampleModal">اضافه بلد + </button>
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
