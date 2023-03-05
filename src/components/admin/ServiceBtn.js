import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ServiceBtn = () => {

    const [service, setService] = useState([]);
    const [all, setAll] = useState(false)
    let filters = [];
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}service`);
        setService(data?.service)
    }

    const filter = (value) => {
        if (all) {

        } else if (filters.includes(value)) {
            filters = filters.filter(ele => (ele != value))
        } else {
            filters = filters.push(value)
        }
        sessionStorage.setItem("ManifastoAvocado", "true")
        console.log(filters)
    }
    return (
        <>
            {service?.map(ele => (
                <div key={ele._id} onClick={(e) => filter(ele.title)}>
                    <input type="checkbox" className="btn-check" id={ele._id} autoComplete="off" />
                    <label className="btn btn-outline-secondary my-1" htmlFor={ele._id}> {ele.title}</label>
                </div>
            ))}

            <input type="checkbox" className="btn-check" id="Sev5" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev5">الكل</label>
        </>
    )
}

export default ServiceBtn