import Banner from "../../components/Banner"
import HomeSections from "../../components/HomeSections";

const HomePage = () => {
    return (
        <>
            <Banner />
            <HomeSections />
            <HomeSections right/>
            <HomeSections />

        </>
    )
}

export default HomePage;