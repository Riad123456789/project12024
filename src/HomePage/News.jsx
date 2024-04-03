
const News = () => {
    return (
        <div className=" ">
            <div className="relative overflow-hidden cursor-pointer group">
                <img className=" h-[250px] md:h-[410px] w-full" src="https://i.ibb.co/1RsvcB3/riad.jpg" alt="" />
                <div className="absolute top-0 h-full w-full  opacity-60  bg-gradient-to-r from-[#292629] to-[#1b020e] ">
                </div>
                <div className="absolute top-0 h-full w-full  ">
                    <div className="mt-5 md:mt-14">
                        <p className="text-white text-[55px]  md:text-[100px] text-center  ">The Only Place</p>
                        <p className="text-white text-2xl md:text-4xl text-center pt-2 font-serif">TO GO FOR SPICES</p>
                        <p className="text-white text-xs text-center pt-5 font-serif md:w-[550px] mx-auto px-4 ">To become the first choice of customer for dates, dry fruits, nuts and other precious items in fruits and vegetables along with imported drinks and wines by bringing the freshest and highest quality to maximum number of customers through our own shops across India !!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;