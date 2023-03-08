import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../../slices/countrySlice'
const CountryBtn = () => {
    let country = useSelector(state => state.country.value);
    const dispatch = useDispatch();
    const [countrys, setCountry] = useState([]);
    const [name, setName] = useState("")
    const [pic, setPic] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}country`);
        setCountry(data.countrys)
    }
    const addCountry = async () => {
        if (name === "" || pic == null) {
            setError(true)
        } else {
            setError(false)
            let formData = new FormData();
            formData.append("pic", pic)
            formData.append("name", name)
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}country`, formData);
            setCountry(data.country)
            setLoading(false)
        }

    }
    return (
        <>
            {countrys?.map(ele => (
                <div key={ele._id} onClick={(e) => { dispatch(set(ele.name)); }}>
                    <input type="radio" name="country" className="btn-check" id={ele._id} autoComplete="off" />
                    <label className="btn btn-outline-secondary my-1 w-100" htmlFor={ele._id}>{ele.name}</label>
                </div>
            ))}
            <button className="btn btn-outline-secondary my-1" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">اضافه بلد + </button>
            <div className="collapse" id="collapseExample">
                <div className="d-flex flex-column justify-content-end align-items-end p-1">
                    <input type="text" className="form-control mb-2" placeholder='اسم البلد' onChange={(e) => setName(e.target.value)} />
                    <input className="form-control mb-2" type="file" id="formFile" onChange={(e) => setPic(e.target.files[0])} />
                    {error && <p style={{ color: "red" }}>please fill all fields</p>}
                    <button className="btn btn-primary" onClick={addCountry}>{loading ? "تحميل..." : "حفظ"}</button>
                </div>
            </div>

        </>
    )
}

export default CountryBtn;