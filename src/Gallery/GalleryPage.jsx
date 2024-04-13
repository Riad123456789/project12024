import { useEffect, useState } from "react";

const GalleryPage = () => {

    const [Data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        fetch("./Fackdata.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            });
    }, []);

    const filterByCategory = (category) => {
        if (category === "all") {
            setFilteredData(Data);
        } else {
            const filtered = Data.filter((item) => item.category === category);
            setFilteredData(filtered);
        }
        setSelectedCategory(category);
    };


    return (
        <div className=" lg:-mt-[73px] xl:-mt-[75px] bg-[#ede8cc] relative">

            <div className="relative w-full bg2 h-36 lg:h-72 shadow-md shadow-amber-300 ">
                <div className=' bg-gradient-to-r from-[#1c1b1b] to-[#322d13] h-full opacity-60'>
                </div>
                <h1 className="  w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[50%] ">
                    OUR GALLERY
                </h1>
            </div>



            <div className="pb-8 mt-10">
                <div className="flex justify-between items-center gap-3   bg-gradient-to-r  from-[#d1d6c9] to-[#8cada2] rounded-md shadow-lg shadow-slate-500  md:px-7 lg:px-5 px-2 pt-3 xl:px-36">

                    <div className="">
                        <button
                            onClick={() => filterByCategory("all")}

                            className={` uppercase rounded-md text-xs md:text-sm font-medium px-5 py-2.5 text-center me-3 mb-3 ${selectedCategory === "all" ? " bg-orange-500 text-black" : "bg-white text-gray-900"
                                }`}
                        >
                            All categories
                        </button>
                    </div>
                    <div className="">
                        <button
                            onClick={() => filterByCategory("spices")}
                            className={`uppercase  rounded-md text-xs md:text-sm font-medium px-5 py-2.5 text-center me-3 mb-3  ${selectedCategory === "spices" ? "bg-orange-500 text-black " : "bg-white text-gray-900 "
                                }`}
                        >
                            Spices
                        </button>
                        <button
                            onClick={() => filterByCategory("DryFood")}
                            className={` uppercase  rounded-md text-xs md:text-sm font-medium px-5 py-2.5 text-center me-3 mb-3 ${selectedCategory === "DryFood" ? "bg-orange-500 text-black" : "bg-white text-gray-900"
                                }`}
                        >
                            Dry Food
                        </button>
                    </div>

                </div>

                <div className=" md:max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 md:gap-5 lg:gap-6 xl:gap-11 py-10 md:py-20  lg:px-5">
                    {filteredData.map((item) => (
                        <div key={item?.id} className={` h-[210px] md:h-[310px] md:w-80 mx-auto rounded-lg 
                        ${selectedCategory === "DryFood" && " bg-[#db331d]"
                            }
                        ${selectedCategory === "spices" && " bg-[#d6ce58]"
                            }
                        ${selectedCategory === "all" && " bg-[#e6a040f0]"
                            }
                          px-2 py-2 md:px-3 md:py-3 group `}>
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    className="h-[160px] w-96 md:h-56 md:w-96   rounded-lg group-hover:scale-110 cursor-pointer duration-1000"
                                    src={item?.image}
                                    alt="image"
                                />
                            </div>
                            <h1 className="flex justify-center font-serif font-medium text-white mt-2 md:mt-4 md:text-2xl">{item?.name}</h1>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default GalleryPage;
