import Banner from "../../components/Banner"
import MainFooter from "../../components/footer/MainFooter";
import HomeSections from "../../components/HomeSections";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <HomeSections />
            <HomeSections right/>
            <HomeSections />
            <MainFooter/>


        </>
    )
}

export default HomePage;