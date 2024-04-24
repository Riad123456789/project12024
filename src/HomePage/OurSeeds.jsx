import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cube';
import { useEffect, useState } from 'react';


const OurSeeds = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch("./Fackdata.json")
            .then((res) => res.json())
            .then((jsonData) => {
                const filteredData = jsonData.filter(item => item.status === "seeds");
                setData(filteredData);
            });
    }, []);



    return (
        <div className='bg-slate-200 py-10 md:py-0 md:px-3 lg:px-4'>
            <div className=" md:py-14 md:pt-20  px-2 md:px-0 ">

                <div className='max-w-7xl mx-auto  md:flex gap-5'>

                    <div className='px-5 md:px-0 space-y-2 relative'>
                        <div className='bg4 h-11 w-full '>
                        </div>
                        <h1 className='text-3xl md:text-2xl font-semibold text-orange-500  border-b-4 border-orange-500 py-3 text-center'>
                            OUR POPULAR  SEEDS
                        </h1>
                        <p className='text-xs md:w-60 font-semibold text-gray-600  pt-2 text-center mx-auto pb-4 md:pb-20 md:text-justify '>To become the first choice of customer for dates, dry fruits, nuts and other precious items in fruits and  wines by bringing the freshest and highest quality .</p>

                        <img className='hidden md:block w-full h-44  absolute top-44' src="https://i.ibb.co/b7v2pm2/360-F-209053389-CWCRf-QI1-RO9j-KCPKAFZH0a-O9-Lwz1durg-removebg-preview.png" alt="" />
                    </div>

                    <div className="w-full md:flex-1 overflow-hidden ">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                375: {
                                    slidesPerView: 3,
                                    spaceBetween: 8,
                                },
                                425: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 8,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                },
                            }}
                        >

                            {Data?.map((item) =>

                                <SwiperSlide key={item.id}>
                                    <div className={`cursor-pointer bg-gradient-to-r  from-[#0ba360] to-[#3cba92]    px-1 py-1  lg:px-2 lg:py-2 rounded-md `}>
                                        <div className="overflow-hidden rounded-lg ">
                                            <img
                                                className=" h-24 w-full md:h-32 lg:h-40 md:w-80  rounded-lg group-hover:scale-110 cursor-pointer duration-1000"
                                                src={item?.image}
                                                alt="image"
                                            />
                                        </div>
                                        <h1 className='text-[70%] md:text-sm lg:text-xl md:font-semibold font-bold pt-2 text-center'>{item?.name}</h1>

                                        <ul className='text-[70%] md:text-sm lg:text-base font-semibold px-1 lg:px-3 py-2'>

                                            <li>
                                                Genus :
                                                <span className='text-[85%] lg:text-[100%]  font-bold lg:font-semibold ml-1 lg:ml-4'>{item?.genus}
                                                </span>
                                            </li>

                                            <li>
                                                Order :
                                                <span className='text-[85%] lg:text-[100%] font-bold lg:font-semibold  ml-2 lg:ml-5'>{item?.order}
                                                </span>
                                            </li>

                                            <li>
                                                Family :
                                                <span className='text-[80%] lg:text-[100%]  font-bold lg:font-semibold  ml-1 lg:ml-4'>{item?.family}
                                                </span>
                                            </li>
                                            <li className='hidden lg:block'>
                                                Clade :
                                                <span className='text-[80%] lg:text-[100%]  font-bold lg:font-semibold  ml-1 lg:ml-5'>{item?.clade}
                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default OurSeeds;