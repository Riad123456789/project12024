import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";


const AllProducts = () => {
    const [Data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("./Fackdata.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                // setLoading(false);
            });
    }, []);

    // if (loading) {
    //     // You can return a loading indicator or a message here
    //     return <p>Loading...</p>;
    // }

    const filteredData = Data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };





    return (
        <div className=' lg:-mt-[73px] xl:-mt-[75px]'>
            <div className="relative w-full bg3 h-36 lg:h-72 shadow-md shadow-sky-600">
                <div className='bg-gradient-to-r from-[#1c1b1b] to-[#052f33] h-full opacity-60'></div>
                <h1 className="h-full w-full font-serif text-white text-center  text-2xl lg:text-4xl absolute top-[48%]">
                    ALL PRODUCTS
                </h1>
            </div>

            <div className="  mt-10 px-1 ">
                <div className="flex justify-between items-center bg-gradient-to-r   from-[#d1d6c9] to-[#8cada2]  rounded-md shadow-lg shadow-slate-500   px-3 md:px-20 py-1">
                    <p className="font-sans text-xs md:text-sm  text-center py-4 font-semibold uppercase text-orange-500 ">
                        Showing all {filteredData.length} results
                    </p>
                    <div className="flex items-center ">

                        <form className="flex items-center rounded-md w-52 md:w-64 mx-auto mr-1 gap-1">
                            <label className="sr-only">Search</label>

                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="font-serif bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Search Product Name"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    required
                                />

                            </div>
                        </form>
                        <div className="ml-[-26px]  z-30"><LuSearch ></LuSearch></div>
                    </div>
                </div>


                <div className="pt-12 grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-7xl mx-auto my-3 mb-10 px-1">
                    {filteredData?.map((item) => (
                        <div
                            key={item?.id}
                            className="relative transition-all duration-300 cursor-pointer filter hover:grayscale-0 rounded-xl bg-gradient-to-r  from-[#0ba360] to-[#3cba92] bg-clip-border text-gray-700 shadow-xl group-hover:shadow-lg 
                        w-full  h-[109%] md:h-[105%]  md:w-80 mx-auto "
                        >
                            <div className="overflow-hidden h-[214px]" href="#">
                                <img
                                    className="h-full w-full rounded-t-xl"
                                    src={item?.image}
                                    alt="product image"
                                />
                            </div>
                            <div className="px-3 pt-1 space-y-5 md:space-y-1">
                                <div>
                                    <h5 className="text-[100%] md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
                                        {item?.name}
                                    </h5>
                                </div>
                                <div className="flex items-center h-24 md:h-28 ">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <span className=" text-[55%] md:text-xs font-medium md:font-semibold text-justify  ">
                                            {item?.description1}
                                        </span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
