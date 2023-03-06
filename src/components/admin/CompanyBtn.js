import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { set } from '../../slices/companySlice'
const CompanyBtn = () => {
    const dispatch = useDispatch();
    const [template, setTemplate] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}template`);
        setTemplate(data?.template)
    }
    return (
        <>
            {/* <input type="checkbox" className="btn-check" id="Type1" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Type1">فرديه</label>

            <input type="checkbox" className="btn-check" id="Type2" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Type2">ذات مسؤليه محدوده</label>

            <input type="checkbox" className="btn-check" id="Type3" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Type3">مساهمه</label>

            <input type="checkbox" className="btn-check" id="AllT" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="AllT">الكل</label> */}

            {template?.map(ele => (
                <div  key={ele._id} onClick={(e) => dispatch(set(ele.name))}>
                    <input type="radio" name="templateFilter" className="btn-check " id={ele._id} autoComplete="off" />
                    <label className="btn btn-outline-secondary my-1 w-100" htmlFor={ele._id}> {ele.name}</label>
                </div>
            ))}

            <input type="radio" name="templateFilter" className="btn-check" id="Sev5" autoComplete="off" onClick={(e) => dispatch(set("all"))}/>
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev5">الكل</label>
        </>
    )
}

export default CompanyBtn