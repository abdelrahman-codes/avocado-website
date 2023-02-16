import React from 'react'
import styled from 'styled-components';

const FilterContnet = ({ IsService, IsCountry, IsCompany }) => {
    return (
        <Filter>
            {IsService &&
                (<>
                    <Title>نوع الخدمه</Title>
                    <FilterContent >
                        <input type="checkbox" className="btn-check" name="btnradio" id="Sev1" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Sev1">خدمه 1</label>

                        <input type="checkbox" className="btn-check" name="btnradio" id="Sev2" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Sev2">خدمه 2</label>

                        <input type="checkbox" className="btn-check" name="btnradio" id="Sev3" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Sev3">خدمه 3</label>

                        <input type="checkbox" className="btn-check" name="btnradio" id="Sev4" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Sev4">خدمه 4</label>

                        <input type="checkbox" className="btn-check" name="btnradio" id="Sev5" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Sev5">الكل</label>
                    </FilterContent>
                    <Border />

                </>
                )


            }
            {IsCompany &&
                (<>
                    <Title>نوع الشركه</Title>
                    <FilterContent >
                        <input type="checkbox" className="btn-check" name="btnradio" id="Type1" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Type1">فرديه</label>

                        <input type="checkbox" className="btn-check" name="btnradio" id="Type2" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Type2">ذات مسؤليه محدوده</label>

                        <input type="checkbox" className="btn-check" name="btnradio" id="Type3" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="Type3">مساهمه</label>

                        <input type="checkbox" className="btn-check" name="btnradio" id="AllT" autoComplete="off" />
                        <label className="btn btn-outline-secondary my-1" htmlFor="AllT">الكل</label>
                    </FilterContent>
                    <Border />
                </>)
            }


            <Title>البلد</Title>
            <FilterContent >
                <input type="checkbox" className="btn-check" name="btnradio" id="EGY" autoComplete="off" />
                <label className="btn btn-outline-secondary my-1" htmlFor="EGY">مصر</label>

                <input type="checkbox" className="btn-check" name="btnradio" id="UAE" autoComplete="off" />
                <label className="btn btn-outline-secondary my-1" htmlFor="UAE">الامارات</label>

                <input type="checkbox" className="btn-check" name="btnradio" id="Moraco" autoComplete="off" />
                <label className="btn btn-outline-secondary my-1" htmlFor="Moraco">المغرب</label>

                <input type="checkbox" className="btn-check" name="btnradio" id="KSA" autoComplete="off" />
                <label className="btn btn-outline-secondary my-1" htmlFor="KSA">السعوديه</label>

                <input type="checkbox" className="btn-check" name="btnradio" id="AllC" autoComplete="off" />
                <label className="btn btn-outline-secondary my-1" htmlFor="AllC">الكل</label>
            </FilterContent>
            <Border />

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
