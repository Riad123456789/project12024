import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const OurMission = () => {
    return (
        <div >


            <div className="max-w-7xl mx-auto    lg:flex  px-2" >
                <div className="h-[73%] w-[73%] mb:h-[50%] md:w-[60%]  mx-auto  flex-1">
                    <div className='relative xl:h-[73%] xl:w-[73%] lg:h-full lg:w-full mx-auto '>
                        <img className=" lg:mt-10 xl:mt-2 overflow-hidden shadow-lg shadow-slate-600" src="https://i.ibb.co/zP7DhsY/423422654-6984580211654130-6927551126586771729-n-1.jpg" alt="" />

                        <div className="absolute  bottom-0 xl:h-[18%] lg:h-[18%] md:h-[19%] h-[22%] w-full   opacity-40  bg-red-600">
                        </div>

                        <div className="absolute  w-full bottom-2 md:bottom-5 xl:bottom-3  pl-5  ">
                            <div className="">
                                <p className=" text-white font-sans text-base lg:text-xl  ">ENGR. MD HUMAYUN KABIR</p>
                                <p className=" text-white font-sans text-sm pt-1 lg:text-base">CEO & PROPRIETOR
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 pt-10 lg:pt-0 ">
                    <div data-aos="fade-left"
                        data-aos-duration="1500"
                        className=" px-5 ">
                        <h1 className="font-sans text-2xl font-semibold pb-2 text-center md:text-left">OUR MISSION </h1>
                        <p className="border-b-4 border-red-600 w-40 mx-auto md:ml-0"></p>
                        <p className="font-serif  font-medium  text-justify py-6 text-sm md:text-base">Our mission at RK Trading is to ignite the senses and elevate culinary experiences through the enchanting world of spices. We are dedicated to sourcing the finest ingredients from around the globe, ensuring unparalleled quality and freshness in every blend. With a passion for flavor and a commitment to authenticity, we strive to inspire creativity in the kitchen and enrich the lives of our customers. From traditional recipes to innovative creations, we aim to be the spice artisans trusted to infuse every dish with richness, depth, and delight.</p>
                    </div>

                    <div data-aos="fade-left"
                        data-aos-duration="1500"
                        className="px-5">
                        <h1 className="font-sans text-2xl font-semibold pb-2 text-center md:text-left">OUR VISION</h1>
                        <p className="border-b-4 border-red-600 w-40 mx-auto md:ml-0"></p>
                        <p className="font-serif font-medium text-justify pt-5 text-sm md:text-base">
                            Our vision at RK Trading is to become the go-to destination for spice lovers worldwide, known for our unwavering commitment to quality, innovation, and sustainability. We aim to redefine the spice industry by continuously pushing the boundaries of flavor exploration and setting new standards for excellence.
                            We envision a future where every kitchen is infused with the aroma of our premium spices, inspiring creativity and delighting taste buds around the globe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;