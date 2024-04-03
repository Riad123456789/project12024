/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import { BiLogoFacebook } from "react-icons/bi";
import { SlSocialTwitter } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FcGallery } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import img from "../../public/o6e5X8Ct60.json"
import Lottie from "lottie-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navber = ({ children }) => {


    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const NavLink1 = <>
        <NavLink to={"/"}>
            <li className="hover:text-orange-600 tracking-wide"><a>HOME</a></li>
        </NavLink>
        <NavLink to={'/About'}>
            <li className="hover:text-orange-600 tracking-wide"><a>ABOUT US</a></li>
        </NavLink>
        <NavLink to={'/allProducts'}>
            <li className="hover:text-orange-600 tracking-wide"><a>PRODUCTS </a></li>
        </NavLink>
        <NavLink to={"/gallery"}>
            <li className="hover:text-orange-600 tracking-wide"><a>GALLERY</a></li>
        </NavLink>
        <NavLink to={'/contact'}>
            <li className="hover:text-orange-600 tracking-wide"><a>CONTACT</a></li>
        </NavLink>
    </>

    const NavLink2 = <>
        <NavLink to={"/"}>
            <li className="cursor-pointer"><a>
                <img className="w-5 h-5" src="https://i.ibb.co/wsZnB3C/home.png" alt="" />
                HOME</a>
            </li>
        </NavLink>
        <NavLink to={'/About'}>
            <li className="cursor-pointer"><a>
                <img className="w-5 h-5" src="https://i.ibb.co/804wK7F/people.png" alt="" />
                ABOUT US</a></li>
        </NavLink>
        <NavLink to={"/allProducts"}>
            <li className="cursor-pointer"><a>
                <img className="w-5 h-5" src="https://i.ibb.co/T82QKmV/received.png" alt="" />
                PRODUCTS</a></li>
        </NavLink>
        <NavLink to={"/gallery"}>
            <li className="cursor-pointer"><a><FcGallery size={20}></FcGallery>GALLERY</a></li>
        </NavLink>
        <NavLink to={'/contact'}>
            <li className="cursor-pointer"><a><FcContacts size={20}></FcContacts>CONTACT</a></li>
        </NavLink>
    </>

    return (
        <div>
            <div className="drawer">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={isSidebarOpen}
                    onChange={toggleSidebar} />
                <div className="drawer-content ">


                    <div className=" md:flex md:items-center  md:justify-between px-0 md:px-16 lg:px-16 xl:px-28 bg-gradient-to-r from-[#f9690e] to-[#f9690e] overflow-hidden ">

                        <div className=" md:flex items-center justify-center text-white text-xs font-semibold  hidden">
                            <img className="w-4 h-4 " src="https://i.ibb.co/q7vRfmL/placeholder.png" alt="image" />
                            <p className=" hover:bg-[#f5e1c9] hover:text-[#754021] p-2 px-2  ">Wapda Road,Ullahpara,Sirajgonj</p>
                        </div>

                        <div className=" flex items-center justify-around gap-10 text-white text-xs font-semibold ">

                            <div className=" p-2 md:flex items-center px-1 gap-1 hidden">
                                <MdOutlineEmail size={15}></MdOutlineEmail>
                                rktradingbd777@gmail.com
                            </div>
                            <div className="relative flex items-center md:hidden ml-3">
                                <Lottie className="absolute -ml-11 w-16 md:w-20 " animationData={img}></Lottie>
                                <p className="font-medium md:font-semibold -mt-[1px]"> +8801795579568</p>
                            </div>
                            <div className="flex">
                                <Link to={"https://www.facebook.com/rktrading.com.bd"}>
                                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-x-2 cursor-pointer">
                                        <BiLogoFacebook size={14}></BiLogoFacebook>
                                    </p>
                                </Link>

                                <Link to={"https://twitter.com/rktradingbd777"}>
                                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 cursor-pointer">
                                        <SlSocialTwitter size={14}></SlSocialTwitter >
                                    </p>
                                </Link>
                                <Link to={"https://www.youtube.com/@rktrading873"}>
                                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-x-2 cursor-pointer">
                                        <CiYoutube size={16}></CiYoutube>
                                    </p>
                                </Link>
                                <Link to={"https://www.instagram.com/rktradingbd"}>
                                    <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-r-2 cursor-pointer">
                                        <IoLogoInstagram size={15}></IoLogoInstagram>
                                    </p>
                                </Link>
                            </div>
                        </div>

                    </div>


                    <div className="navbar  bg-gray-800 bg-opacity-80   md:pr-16 md:px-8 lg:px-16 xl:px-32 sticky top-0 z-40  ">
                        <div className="navbar-start w-full md:navbar-start ">

                            <div className=" lg:hidden ">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>


                            <div className="avatar ">
                                <div className="w-9 md:w-[52px] rounded-full">
                                    <img src="https://i.ibb.co/8MLXy0k/395030218-354819416996869-7748260630163794940-n.jpg" />
                                </div>
                            </div>
                            <a className=" pl-2 text-base md:text-xl font-bold ">
                                <span className="text-[#f9690e] tracking-wide">RK </span><span className="text-amber-600" >TRADING</span></a>
                        </div>
                        <div className="navbar-center hidden lg:flex lg:pt-[5px] xl:pt-[7px]">
                            <ul className="menu menu-horizontal px-1  font-bold text-white ">
                                {NavLink1}
                            </ul>
                        </div>
                        <div className=" navbar-end ">

                            <div className="relative md:flex items-center hidden">
                                <Lottie className="absolute -left-12 md:-left-14 w-16 md:w-20 " animationData={img}></Lottie>
                                <p className="font-medium md:font-semibold -mt-[1px] text-white tracking-wide"> +8801795579568</p>
                            </div>
                        </div>
                    </div>


                    {children}


                </div>

                <div className="drawer-side lg:drawer-toggle z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay " ></label>

                    <div className="menu py-3  px-1 w-48 min-h-full bg-gradient-to-r from-[#f5f3f2] to-[#f6f2ef]  ">
                        {/* Sidebar content here */}

                        <div
                            className="flex justify-end cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            <RxCross2 color="#ef9565" size={25}></RxCross2>
                        </div>
                        <ul onClick={toggleSidebar} className="pt-7 font-bold text-[#ef9565] ">
                            {NavLink2}
                        </ul>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navber;