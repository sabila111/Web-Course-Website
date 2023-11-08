import Banner from "../../Shared/banner/Banner";
import HomeTabs from "./HomeTabs";
import Extra from "./extra/Extra";
import ExtraPart from "./extra/ExtraPart";




const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <HomeTabs></HomeTabs>
            <Extra></Extra>
            <ExtraPart></ExtraPart>
        </div>
    );
};

export default Home;