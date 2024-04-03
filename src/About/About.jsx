import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import Recognition from "./Recognition";
import Section2 from "./Section2";
import TimeLine from "./TimeLine";
import WhyChoose from "./WhyChoose";


const About = () => {
    return (
        <div className='overflow-hidden   lg:-mt-[73px] xl:-mt-[75px]'>
            <div className="relative w-fill bg h-36 lg:h-72 shadow-lg shadow-red-400  ">
                <div className='relative bg-gradient-to-r from-[#1c1b1b] to-[#210d0d] h-full opacity-50'>
                </div>
                <h1 className="h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[48%]">
                    ABOUT US
                </h1>
            </div>
            <AboutUs></AboutUs>
            <OurMission></OurMission>
            <WhyChoose></WhyChoose>
            <TimeLine></TimeLine>
            <div>
                <Section2></Section2>
            </div>
            <Recognition></Recognition>
        </div>
    );
};

export default About;