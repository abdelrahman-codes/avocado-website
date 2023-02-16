import React from 'react'
import styled from 'styled-components';

const FilterContnet = ({ IsService, IsCountry, IsCompany }) => {
    return (
        <Filter>
            {IsService &&
                (<>
                    <Title>نوع الخدمه</Title>
                    <FilterContent >
                        <input type="checkbox" class="btn-check" name="btnradio" id="Sev1" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Sev1">خدمه 1</label>

                        <input type="checkbox" class="btn-check" name="btnradio" id="Sev2" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Sev2">خدمه 2</label>

                        <input type="checkbox" class="btn-check" name="btnradio" id="Sev3" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Sev3">خدمه 3</label>

                        <input type="checkbox" class="btn-check" name="btnradio" id="Sev4" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Sev4">خدمه 4</label>

                        <input type="checkbox" class="btn-check" name="btnradio" id="Sev5" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Sev5">الكل</label>
                    </FilterContent>
                    <Border />

                </>
                )


            }
            {IsCompany &&
                (<>
                    <Title>نوع الشركه</Title>
                    <FilterContent >
                        <input type="checkbox" class="btn-check" name="btnradio" id="Type1" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Type1">فرديه</label>

                        <input type="checkbox" class="btn-check" name="btnradio" id="Type2" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Type2">ذات مسؤليه محدوده</label>

                        <input type="checkbox" class="btn-check" name="btnradio" id="Type3" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="Type3">مساهمه</label>

                        <input type="checkbox" class="btn-check" name="btnradio" id="AllT" autocomplete="off" />
                        <label class="btn btn-outline-secondary my-1" for="AllT">الكل</label>
                    </FilterContent>
                    <Border />
                </>)
            }


            <Title>البلد</Title>
            <FilterContent >
                <input type="checkbox" class="btn-check" name="btnradio" id="EGY" autocomplete="off" />
                <label class="btn btn-outline-secondary my-1" for="EGY">مصر</label>

                <input type="checkbox" class="btn-check" name="btnradio" id="UAE" autocomplete="off" />
                <label class="btn btn-outline-secondary my-1" for="UAE">الامارات</label>

                <input type="checkbox" class="btn-check" name="btnradio" id="Moraco" autocomplete="off" />
                <label class="btn btn-outline-secondary my-1" for="Moraco">المغرب</label>

                <input type="checkbox" class="btn-check" name="btnradio" id="KSA" autocomplete="off" />
                <label class="btn btn-outline-secondary my-1" for="KSA">السعوديه</label>

                <input type="checkbox" class="btn-check" name="btnradio" id="AllC" autocomplete="off" />
                <label class="btn btn-outline-secondary my-1" for="AllC">الكل</label>
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
