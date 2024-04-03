import { BiLogoFacebook } from "react-icons/bi";
import { SlSocialTwitter } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import img from "../public/o6e5X8Ct60.json"
import Lottie from "lottie-react";



function App({children}) {

 

  const NavLink = <>
    <li><a>HOME</a></li>
    <li><a>ALL PAGES</a></li>
    <li><a>PLAN </a></li>
    <li><a>REGISTER</a></li>
    <li><a>DASHBOARD</a></li>

  </>


  return (
    <>

      <div className=" md:flex  md:justify-between px-0 md:px-16 lg:px-16 xl:px-28 bg-gradient-to-r from-[#f9690e] to-[#f9690e] overflow-hidden">

        <div className=" md:flex items-center justify-center text-white text-xs font-semibold border-b-2 md:border-b-0 hidden">
          <img className="w-4 h-4 " src="https://i.ibb.co/q7vRfmL/placeholder.png" alt="image" />
          <p className=" hover:bg-[#f5e1c9] hover:text-[#754021] p-2 px-2  ">Wapda Road,Ullahpara,Sirajgonj</p>
        </div>

        <div className=" flex items-center justify-around gap-10 text-white text-xs font-semibold ">

          <div className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:flex items-center px-1 gap-1 hidden">
            <MdOutlineEmail size={15}></MdOutlineEmail>
            Riad80817@gmail.com
          </div>
          <div className="relative flex items-center md:hidden ml-3">
            <Lottie className="absolute -ml-11 w-16 md:w-20 " animationData={img}></Lottie>
            <p className="font-medium md:font-semibold -mt-[1px]"> +8801756660368</p>
          </div>
          <div className="flex">
            <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-x-2 cursor-pointer">
              <BiLogoFacebook size={14}></BiLogoFacebook>
            </p>
            <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 ">
              <SlSocialTwitter size={14}></SlSocialTwitter >
            </p>
            <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-x-2">
              <CiYoutube size={16}></CiYoutube>
            </p>
            <p className="hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-r-2">
              <IoLogoInstagram size={15}></IoLogoInstagram>
            </p>
          </div>
        </div>

      </div>


      <div className="navbar bg-[#e8e5dc] shadow-sm shadow-slate-200 border md:pr-16 md:px-8 lg:px-16 xl:px-32 z-30 sticky top-0">
        <div className="navbar-start w-full md:navbar-start ">

          <div className="dropdown h-full">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {NavLink}
            </ul>

          </div>
          <div className="avatar ">
            <div className="w-9 md:w-12 rounded-full">
              <img src="https://i.ibb.co/8MLXy0k/395030218-354819416996869-7748260630163794940-n.jpg" />
            </div>
          </div>
          <a className=" pl-2 text-base md:text-xl font-bold ">
            <span className="text-slate-800 ">RK </span><span className="text-amber-600" >TRADING</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-serif font-medium">
            {NavLink}
          </ul>
        </div>
        <div className=" navbar-end ">

          <div className="relative md:flex items-center hidden">
            <Lottie className="absolute -left-12 md:-left-14 w-16 md:w-20 " animationData={img}></Lottie>
            <p className="font-medium md:font-semibold -mt-[1px]"> +8801756660368</p>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
