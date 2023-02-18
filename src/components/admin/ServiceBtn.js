import React from 'react'

const ServiceBtn = () => {
    return (
        <>
            <input type="checkbox" className="btn-check" id="Sev1" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev1">خدمه 1</label>

            <input type="checkbox" className="btn-check" id="Sev2" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev2">خدمه 2</label>

            <input type="checkbox" className="btn-check" id="Sev3" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev3">خدمه 3</label>

            <input type="checkbox" className="btn-check" id="Sev4" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev4">خدمه 4</label>

            <input type="checkbox" className="btn-check" id="Sev5" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Sev5">الكل</label>
        </>
    )
}

export default ServiceBtn