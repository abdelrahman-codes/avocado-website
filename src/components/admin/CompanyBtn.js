import React from 'react'

const CompanyBtn = () => {
    return (
        <>
            <input type="checkbox" className="btn-check" id="Type1" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Type1">فرديه</label>

            <input type="checkbox" className="btn-check" id="Type2" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Type2">ذات مسؤليه محدوده</label>

            <input type="checkbox" className="btn-check" id="Type3" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="Type3">مساهمه</label>

            <input type="checkbox" className="btn-check" id="AllT" autoComplete="off" />
            <label className="btn btn-outline-secondary my-1" htmlFor="AllT">الكل</label>
        </>
    )
}

export default CompanyBtn