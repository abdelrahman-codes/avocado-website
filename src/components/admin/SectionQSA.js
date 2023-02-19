import React from 'react'
import styled from 'styled-components';

const SectionQSA = () => {
    return (
        <QSA>
            <div>
                <Row>
                    <label>Qustion title</label>
                    <input type="text" class="form-control" />
                </Row>
                <Row>
                    <input type="text" class="form-control" />
                    <label>عنوان السوال </label>
                </Row>


            </div>

            <div>
                <Row>
                    <label>Qustion tag</label>
                    <input type="text" class="form-control" />
                </Row>
                <Row>
                    <input type="text" class="form-control" />
                    <label>علامه السوال</label>
                </Row>
            </div>

            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"  />
                <label class="btn btn-outline-secondary" for="btnradio1">صور</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn btn-outline-secondary" for="btnradio2">ملفات</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label class="btn btn-outline-secondary" for="btnradio3">كلام</label>
            </div>
        </QSA>
    )
}

export default SectionQSA;

const QSA = styled.div`
display:flex;
flex-direction:column;
flex-wrap: wrap;
width: 100%;
background-color: #C3C2C5;
padding: 15px;
border-radius: 15px;
margin-bottom: 20px;
>div{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 15px;

}
`;

const Row = styled.div`
width: 50%;
display: flex;
text-align: center;
align-items: center;
padding: 5px;
@media (max-width: 600px) {
    width: 100%;
}

>input{
    padding:10px;
    border-radius: 15px;
}
`;