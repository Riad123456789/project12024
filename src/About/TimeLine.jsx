import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiChiliPepper } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcCloseUpMode } from "react-icons/fc";
AOS.init();

const TimeLine = () => {
    return (
        <div>
            <div className='flex justify-between '>
                <div>
                    <img className='absolute h-32 w-32 md:h-52 md:w-52 ml-3 md:ml-14 -mt-16 md:-mt-20' src="https://i.ibb.co/DpKx7VR/images-removebg-preview.png" alt="" />
                </div>

                <div>
                    <img className='justify-end h-28 w-28 md:h-96 md:w-80 -mt-9 mr-4 md:mr-14 md:-mt-24' src="https://i.ibb.co/fp7LrJ0/game-changers-superior-spices-VT-MAG0721-fe03449d05cc498d92a3d1e29e11f5a6-removebg-preview.png" alt="" />
                </div>
            </div>

            <div className=' max-w-5xl mx-auto  md:-mt-20 z-20 px-2 pb-10'>
                <div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <GiChiliPepper color='red' size={40}></GiChiliPepper>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                                className="timeline-start md:text-end mb-20 ">
                                <div className="text-xl md:text-2xl font-black pb-2">Company mission</div>
                                <p className='text-sm md:text-base font-medium text-justify'>
                                    At RK TRADING, our mission is to revolutionize the way people experience flavor by offering a diverse range of high-quality spices, herbs, and seasonings. We believe that exceptional taste begins with exceptional ingredients, which is why we meticulously source our products from trusted  and suppliers worldwide.
                                </p>
                            </div>
                            <hr className='bg-black' />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <FcLike size={35}></FcLike>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                                className="timeline-end mb-20">
                                <div className="text-xl md:text-2xl font-black pb-2 pt-1">Our commitment</div>
                                <p className='text-sm md:text-base font-medium text-justify'>
                                    Our commitment to quality extends beyond sourcing to every aspect of our operation, from blending and packaging to customer service. We employ strict quality control measures to ensure that only the freshest and most flavorful spices make it to your kitchen.
                                </p>
                            </div>
                            <hr className='bg-black' />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <FcBusinessman size={38}></FcBusinessman>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"

                                className="timeline-start md:text-end mb-20">
                                <div className="text-xl md:text-2xl font-black pb-2 pt-1">Owner speech</div>
                                <p className='text-sm md:text-base font-medium text-justify'>
                                    When I embarked on this journey, I had a vision of creating more than just a spice company. I dreamed of building a community of passionate individuals dedicated to elevating culinary experiences and enriching lives through the magic of flavor. And today, I am thrilled to see that vision come to life.
                                </p>
                            </div>
                            <hr className='bg-black' />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <FcReading size={40}></FcReading>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                                className="timeline-end mb-2">
                                <div className="text-xl md:text-2xl font-black pb-2 pt-1">Our passion</div>
                                <p className='text-sm md:text-base font-medium text-justify'>
                                    Our passion goes beyond just great taste. We are also committed to sustainability and ethical sourcing practices. We work closely with our suppliers to ensure fair wages and environmentally responsible practices, because we believe that good food should do good for the planet and the people who produce it.
                                </p>
                            </div>
                            <hr className='bg-black' />
                        </li>
                        <li>
                            <hr className='bg-black' />
                            <div className="timeline-middle">
                                <FcCloseUpMode size={40}></FcCloseUpMode>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default TimeLine;