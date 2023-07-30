import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/Banner"
import MainFooter from "../../components/footer/MainFooter";
import HomeSections from "../../components/HomeSections";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {

    const [section, setSection] = useState([]);
    useEffect(() => {
        localStorage.clear()
        fetchData();
    }, [])
    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}section`);
        setSection(data.section)
    }
    return (
        <>
            <Navbar />
            <Banner />
            {section?.map((ele, index) => (
                index % 2 === 0
                    ? < HomeSections key={ele._id + index} section={ele} />
                    : < HomeSections key={ele._id + index} right section={ele} />
            ))}
            <MainFooter />


        </>
    )
}

export default HomePage;