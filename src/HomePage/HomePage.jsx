import LazyLoad from "react-lazy-load";
import Banner2 from "../Component/Banner2";
import Test from "../Component/Test";
import Blog from "./Blog";
import News from "./News";
import OurProducts from "./OurProducts";
import OurSeeds from "./OurSeeds";
import OurSpices from "./OurSpices";
import Reviews from "./Reviews";



const HomePage = () => {
    return (
        <div>

            <div className="md:-mt-[68px] lg:-mt-[73px] xl:-mt-[75px]">
                <Test></Test>
            </div>
            <Banner2></Banner2>
            <OurProducts></OurProducts>
            <News></News>
            <OurSeeds></OurSeeds>
            <OurSpices></OurSpices>
            <Blog></Blog>
            <Reviews></Reviews>

        </div>
    );
};

export default HomePage;