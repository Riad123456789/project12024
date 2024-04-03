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
                        <img className="h-full " src="https://i.ibb.co/VSN0wrX/vibes-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/KKy6fHr/vibes-2-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/nMwLs5t/vibes-6-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/g9vDpxF/vibes-5-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full" src="https://i.ibb.co/JHtKt1n/vibes-4-1.png" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full " src="https://i.ibb.co/ZgwwcC1/Aura-Spices-web-banner-16-05-2022-01-1.jpg" alt="" />
                    </div>
                    <div className=" w-full h-[30vh] md:h-[88vh] ">
                        <img className="h-full " src="https://i.ibb.co/VSN0wrX/vibes-1.png" alt="" />
                    </div>

                </Carousel>

            </div>
        </div>
    );
};

export default Test;