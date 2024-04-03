import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdOutlinePhoneInTalk } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Foother = () => {
    return (
        <div>
            <footer className="bg h-[610px] md:h-96 lg:h-[360px] relative  ">
                <div className=' relative bg-gradient-to-r from-[#151514] to-[#000000] h-full opacity-80   '>
                </div>


                <div className='absolute bottom-10  lg:bottom-16 px-6 '>
                    <div className=" container sm:grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 items-start justify-center">

                        <div className="flex flex-col my-8 lg:pl-10 ">
                            <h2 className="font-medium text-2xl font-serif text-amber-400">NAVIGATION MENU</h2>
                            <div className="flex flex-wrap sm:flex-col gap-1 text-sm mt-3 ">
                                <Link to={'/'}>
                                    <p className=' active:scale-95 text-white font-bold flex items-center gap-3' >
                                        <IoIosArrowForward></IoIosArrowForward>  HOME
                                    </p>
                                </Link>
                                <Link to={"/about"}>
                                    <p className='  text-white font-semibold flex items-center gap-3' >
                                        <IoIosArrowForward></IoIosArrowForward>  ABOUT
                                    </p>
                                </Link>

                                <Link to={'/contact'}>
                                    <p className=' active:scale-95 text-white font-semibold flex items-center gap-3'>
                                        <IoIosArrowForward></IoIosArrowForward>   CONTACT
                                    </p>
                                </Link>
                                <Link to={'/gallery'}>
                                    <p className=' active:scale-95 text-white font-semibold flex items-center gap-3' >
                                        <IoIosArrowForward></IoIosArrowForward>   GALLERY
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col my-8  ">
                            <h2 className="font-medium  text-2xl font-serif text-amber-400">COMMUNITY</h2>
                            <div className="flex sm:flex-col flex-wrap gap-1 text-sm text-white font-semibold mt-3 ">
                                <Link to={"https://www.facebook.com/rktrading.com.bd"}>
                                    <p className='  text-white font-semibold flex items-center gap-2' >
                                        <BiLogoFacebookSquare size={20}></BiLogoFacebookSquare>  FACEBOOK
                                    </p>
                                </Link>
                                <Link to={"https://www.instagram.com/rktradingbd"}>
                                    <p className='  text-white font-semibold flex items-center gap-2 ml-[1px]' >
                                        <FaInstagramSquare size={20}></FaInstagramSquare>Instagram
                                    </p>
                                </Link>
                                <Link to={"https://www.youtube.com/@rktrading873"}>
                                    <p className='  text-white font-semibold flex items-center gap-2 ml-[]' >
                                        <AiFillYoutube size={20}></AiFillYoutube>YouTube
                                    </p>
                                </Link>
                                <Link to={'https://twitter.com/rktradingbd777'}>
                                    <p className='  text-white font-semibold flex items-center gap-2 ml-[1px]' >
                                        <BsTwitter size={17}></BsTwitter>Twitter
                                    </p>
                                </Link>


                            </div>
                        </div>
                        <div className="flex flex-col my-8  ">
                            <h2 className="font-medium text-2xl font-serif text-amber-400 ">ABOUT  RK TRADING</h2>
                            <div className="flex  flex-col gap-1 text-xs text-white font-serif mt-2">
                            At RK Trading, we are passionate about flavor. Founded with a mission to redefine the spice industry, we specialize in sourcing the finest ingredients from around the world to create exceptional spice blends, herbs, and seasonings.
                            </div>
                        </div>
                        <div className="flex flex-col my-8  lg:pl-20 ">
                            <h2 className="font-medium text-2xl font-serif text-amber-400">GET IN TOUCH</h2>
                            <div className="flex sm:flex-col flex-wrap gap-1 text-sm dark:text-blacK mt-2">
                                <span className='flex justify-start items-center gap-1  py-2 pl-2 text-white font-semibold'><MdOutlineLocationOn />Wapda Road,Ullahpara,Sirajgonj</span>
                                <a className='flex justify-start items-center gap-1 py-2 pl-2 text-white font-semibold' ><HiOutlineMailOpen />rktradingbd777@gmail.com</a>
                                <a className='flex justify-start items-center gap-1 py-2 pl-2 text-white font-semibold' ><MdOutlinePhoneInTalk /> +8801795579568</a>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center px-6  text-sm  ">
                        <span className=" text-white font-semibold ">© Copyright 2024. All Rights Reserved </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Foother;