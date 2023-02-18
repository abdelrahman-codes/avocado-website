import React from 'react'

const CountryBtn = () => {
    return (
        <>
            <input type="checkbox" className="btn-check" id="EGY" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="EGY">مصر</label>

            <input type="checkbox" className="btn-check" id="UAE" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="UAE">الامارات</label>

            <input type="checkbox" className="btn-check" id="Moraco" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Moraco">المغرب</label>

            <input type="checkbox" className="btn-check" id="KSA" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="KSA">السعوديه</label>

            <input type="checkbox" className="btn-check" id="AllC" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="AllC">الكل</label>
        </>
    )
}

export default CountryBtn;