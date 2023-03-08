import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import arrowPic from '../../assets/arrow.png'
import { set } from '../../slices/sectionSlice';

const TempleteTopbar = ({ county, templete, id }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [add, setAdd] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const addSection = async () => {
        if (title === "" || titleAr === "") {
            setError(true)

        } else {
            setError(false)
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}template/section`, {
                title, template: id, titleAr
            });
            dispatch(set(data.templateSection))
            setLoading(false)
            setAdd(false)
        }
    }
    return (
        <Bar>
            {!add &&
                <>
                    <button className="btn btn-secondary px-2 mx-2" onClick={() => setAdd(true)}>اضافة </button>
                </>
            }

            {add &&
                <>
                    <button className="btn btn-outline-secondary px-2 " onClick={addSection}>{loading ? "تحميل..." : "حفظ"} </button>
                    <div className="d-flex flex-column align-items-start justify-content-start">
                        <input type="text" className="form-control m-1" placeholder='اسم السكشن بالانجليزي' style={{ border: error ? "1px solid red" : "1px solid gray" }} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" className="form-control m-1" placeholder='اسم السكشن بالعربي' style={{ border: error ? "1px solid red" : "1px solid gray" }} onChange={(e) => setTitleAr(e.target.value)} />
                    </div>
                </>
            }

            <div>
                <h5>{templete}</h5>
                <img src={arrowPic} alt="arrowPic" />
                <h5>{county}</h5>
                <img src={arrowPic} alt="arrowPic" />
            </div>
        </Bar>
    )
}

export default TempleteTopbar;

const Bar = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: flex-end;
>input{
    max-width: 200px;
}
>div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    >img{
        width:40px;
        margin: 20px;
        @media (max-width: 500px) {
        margin: 10px;
        width:30px;
            
        }
        @media (max-width: 400px) {
        width:20px;
        }
    }
    >h5{
        @media (max-width: 400px) {
            font-size: 16px;
            text-align: center;
        }
    }
}

`;