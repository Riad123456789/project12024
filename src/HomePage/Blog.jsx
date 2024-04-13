import video from "../../public/New folder/10000000_7285433644825476_2841910340063935254_n.mp4"
import video1 from "../../public/New folder/WhatsApp Video 2024-03-28 at 8.35.49 PM.mp4"
import video2 from "../../public/New folder/WhatsApp Video 2024-03-28 at 8.42.56 PM.mp4"
import video3 from "../../public/New folder/WhatsApp Video 2024-03-28 at 8.42.56 PM.mp4"
import img from "../../public/New folder/spices (1).gif"
import img1 from "../../public/New folder/clove.gif"
import img2 from "../../public/New folder/star-anise.gif"
import img3 from "../../public/New folder/cardamom.gif"
import img4 from "../../public/New folder/turmeric.gif"
import img5 from "../../public/New folder/chili.gif"

import ReactPlayer from 'react-player'

const Blog = () => {
    return (
        <div className=" md:pt-1  pb-16 relative">
            <img className="w-16 h-16 md:w-20 md:h-20 absolute mt-3 left-3  xl:left-36 xl:mt-24" src={img5} alt="" />
            <img className="w-16 h-16 md:w-20 md:h-20 absolute mt-3 right-3 xl:right-36 xl:mt-28" src={img1} alt="" />
            <img className="hidden xl:block w-16 h-16 md:w-20 md:h-20 absolute  xl:right-20 xl:mt-96" src={img2} alt="" />
            <img className="hidden xl:block w-16 h-16 md:w-20 md:h-20 absolute xl:left-20 xl:mt-96" src={img} alt="" />
            <img className="w-16 h-16 md:w-20 md:h-20 absolute left-2 bottom-3 xl:left-24 xl:bottom-20 " src={img4} alt="" />
            <img className="w-16 h-16 md:w-20 md:h-20 absolute right-2 bottom-3 xl:right-20 xl:bottom-20 " src={img3} alt="" />


            <div className=" max-w-6xl mx-auto px-2 pt-4 pb-10 md:pt-0">
                <img className='h-14 w-80  md:h-16 md:w-[470px] mx-auto mb-2 mt-8 md:mt-12' src="https://i.ibb.co/tPyyKhT/e51ab9683522f0c3f68c8308fb8b161d-1-removebg-preview.png" alt="" />
                <div className="text-center ">
                    <h1
                        style={{
                            textTransform: "uppercase",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                        }}
                        className="text-3xl px-2 md:text-4xl lg:text-5xl font-semibold font-serif pb-7 md:pt-2 md:pb-16  bg-gradient-to-r from-red-700 to-amber-500  "
                    >
                        Experience  BLOG
                    </h1>
                </div>


                <div className="max-w-5xl mx-auto grid   md:grid-cols-2 gap-5 px-2">


                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden rounded-2xl">
                        <ReactPlayer width='100%' height='100%' controls={true} url={video} />
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden rounded-2xl">
                        <ReactPlayer width='100%' height='100%' controls={true} url={video} />
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden rounded-2xl">
                        <ReactPlayer width='100%' height='100%' controls={true} url={video} />
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-xl md:flex-row md:w-full hover:bg-gray-100 group overflow-hidden rounded-2xl">
                        <ReactPlayer width='100%' height='100%' controls={true} url={video} />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blog;