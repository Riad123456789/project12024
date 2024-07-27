import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Test = () => {
    return (
        <div>
            <div className=" md:pt-0">
                <Carousel
                    className=" text-center shadow-lg shadow-zinc-300  "
                    showStatus={false}
                    emulateTouch={true}
                    stopOnHover={false}
                    showIndicators={false}
                    autoPlay={true}
                    interval={6500}
                    infiniteLoop={true}
                    dynamicHeight={true}
                >

                    <div className=" w-full h-[30vh] md:h-[88vh] shadow-2xl">
                        <img className="h-full " src="https://i.ibb.co/jRGy3W6/vibes-1-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/4PZsKjm/vibes-2-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/4pQ3TqK/vibes-6-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/gjjWSx3/vibes-5-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/pQzFg1c/vibes-4-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full " src="https://i.ibb.co/NYkgrQV/Aura-Spices-web-banner-16-05-2022-01-1.jpg" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full " src="https://i.ibb.co/jRGy3W6/vibes-1-1.png" alt="" />
                    </div>

                </Carousel>

            </div>
        </div>
    );
};

export default Test;