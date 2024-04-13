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
        <div className='bg-slate-200 py-10 md:py-0'>
            <div className=" md:py-14 md:pt-20  px-2 md:px-0 ">

                <div className='max-w-7xl mx-auto  md:flex gap-5'>

                    <div className='px-5 md:px-0 space-y-2 relative'>
                        <div className='bg4 h-11 w-full '>
                        </div>
                        <h1 className='text-3xl md:text-2xl font-semibold text-orange-500  border-b-4 border-orange-500 py-3 text-center'>
                            OUR POPULAR  SEEDS
                        </h1>
                        <p className='text-xs md:w-60 font-semibold text-gray-600  pt-2 text-center mx-auto pb-4 md:pb-20 md:text-justify '>To become the first choice of customer for dates, dry fruits, nuts and other precious items in fruits and  wines by bringing the freshest and highest quality .</p>

                        <img className='hidden md:block w-full h-44  absolute top-48' src="https://i.ibb.co/b7v2pm2/360-F-209053389-CWCRf-QI1-RO9j-KCPKAFZH0a-O9-Lwz1durg-removebg-preview.png" alt="" />
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
                                    spaceBetween: 0,
                                },
                                375: {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },
                                425: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 5,
                                },
                            }}
                        >

                            {Data?.map((item) => <SwiperSlide key={item.id} className='border-black'>
                                <div className="relative   transition-all duration-300 cursor-pointer filter  rounded-md bg-gradient-to-r  from-[#e89015] to-[#F5DD61] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg h-[265px] md:h-[335px] w-[138px] md:w-56 mx-auto  ">
                                    <div className=" h-[140px] md:h-[206px] " >
                                        <img className="h-[145px] md:h-[187px] rounded-t-md w-full" src={item?.image} alt="product image" />
                                    </div>
                                    <div className=" pt-4 px-1 md:pt-0 md:px-2 md:pb-5 ">
                                        <a >
                                            <h5 className="text-sm md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item?.name}</h5>
                                        </a>
                                        <div className=' pt-1 space-y-[1px] '>
                                            <div className='flex  items-center md:gap-5'>
                                                <p className='text-xs md:text-sm md:font-semibold  md:pl-1 '>Genus :</p>
                                                <p className='text-xs md:text-sm md:font-semibold pl-[10px] md:pl-6 '>{item?.genus}</p>
                                            </div>
                                            <div className='flex  items-center md:gap-10'>
                                                <p className='text-xs md:text-sm md:font-semibold md:pl-1 '>Clade :</p>
                                                <p className='text-xs md:text-sm md:font-semibold pl-[10px] md:pl-2 '>{item?.clade}</p>
                                            </div>
                                            <div className='flex  items-center md:gap-10'>
                                                <p className='text-xs md:text-sm md:font-semibold md:pl-1 '>Order :</p>
                                                <p className='text-xs md:text-sm md:font-semibold pl-[6px] md:pl-2 '>{item?.order}</p>
                                            </div>
                                            <div className=' flex  items-center md:gap-9'>
                                                <p className='text-xs md:text-sm md:font-semibold md:pl-1 '>Family :</p>
                                                <p className='text-xs md:text-sm md:font-semibold pl-[6px] md:pl-2 '>{item?.family}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default OurSeeds;