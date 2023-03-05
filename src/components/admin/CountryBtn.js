import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CountryBtn = () => {
    const [countrys, setCountry] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}country`);
        setCountry(data.countrys)
    }
    return (
        <>
            {countrys?.map(ele => (
                <div key={ele._id} >
                    <input type="checkbox" className="btn-check" id={ele._id} autoComplete="off" />
                    <label className="btn btn-outline-secondary my-1" htmlFor={ele._id}>{ele.name}</label>
                </div>
            ))}

            <input type="checkbox" className="btn-check" id="AllC" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="AllC">الكل</label>
        </>
    )
}

export default CountryBtn;