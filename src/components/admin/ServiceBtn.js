import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { set } from '../../slices/serviceSlice'

const ServiceBtn = () => {
    const dispatch = useDispatch();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}service`);
        setService(data?.service)
    }

    return (
        <>
            {service?.map(ele => (
                <div key={ele._id} onClick={(e) => dispatch(set(ele.title))}>
                    <input type="radio" name="serviceFilter" className="btn-check" id={ele._id} autoComplete="off" />
                    <label className="btn btn-outline-secondary my-1 w-100" htmlFor={ele._id}> {ele.title}</label>
                </div>
            ))}

            <input type="radio" name="serviceFilter" className="btn-check" id="Sev5" autoComplete="off" onClick={(e) => dispatch(set("all"))}/>
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev5">الكل</label>
        </>
    )
}

export default ServiceBtn