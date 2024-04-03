import { FcShipped } from "react-icons/fc";
import { FcExport } from "react-icons/fc";
import { FcImport } from "react-icons/fc";

const WhyChoose = () => {
    return (

        <div className="bg-slate-200 pb-28 md:pb-40 px-4">

            <div className=" mt-20 md:mt-28 pt-4">
                <img className='h-14 w-80  md:h-16 md:w-[450px] mx-auto mb-2 ' src="https://i.ibb.co/tPyyKhT/e51ab9683522f0c3f68c8308fb8b161d-1-removebg-preview.png" alt="" />
                <h1 className="text-2xl lg:text-4xl text-center font-serif  uppercase font-semibold ">Why to choose us ?
                </h1>
                <p className="text-center font-serif text-sm  md:text-base text-slate-600 md:w-[600px] pt-2 md:pt-3 mx-auto px-8 md:px-0">we prioritize continuous customer satisfaction, offering innovative, transparent, and reliable solutions that only meet your needs.
                </p>
            </div>

            <div className="grid  md:grid-cols-3 max-w-6xl mx-auto gap-5 md:gap-24 mt-12 px-2">

                <div className="border bg-white md:h-64 md:w-[325px] py-4 px-5 md:px-4  space-y-3 rounded-md shadow-lg">
                    <div className="flex justify-center items-center mx-auto">
                        <FcImport className="border-4 border-pink-500 rounded-full p-3  mx-3" size={80} color="green"></FcImport>
                    </div>
                    <h2 className=" font-serif text-lg md:text-2xl font-semibold text-center">IMPORT</h2>
                    <p className="font-sans   text-center md:text-center text-xs md:text-sm ">As premier importers of global spices and dry foods, we offer a curated selection of high-quality products, embodying our commitment
                        <span className="md:flex justify-center">to excellence  satisfaction.</span> </p>
                </div>

                <div className="border bg-white md:h-64 md:w-[325px] py-4 px-5 md:px-4  space-y-3 rounded-md shadow-lg">
                    <div className="flex justify-center items-center mx-auto">
                        <FcExport className="border-4 border-orange-400 rounded-full p-3 mx-3" size={80} color="green"></FcExport>
                    </div>
                    <h2 className=" font-serif text-lg md:text-2xl font-semibold text-center">EXPORT</h2>
                    <p className="font-sans  text-center md:text-center text-xs md:text-sm ">
                        As leading exporters of a diverse array of spices and dry foods worldwide, our commitment to excellence shines through in <span className="md:flex md:justify-center">our meticulously sourced, high-quality .</span>
                    </p>
                </div>

                <div className="border bg-white md:h-64 md:w-[325px] py-4 px-5 md:px-4  space-y-3 rounded-md shadow-lg">
                    <div className="flex justify-center items-center mx-auto">
                        <FcShipped className="border-4 border-lime-600 rounded-full p-3  mx-3" size={80} color="green"></FcShipped>
                    </div>
                    <h2 className=" font-serif text-lg md:text-2xl font-semibold text-center uppercase">Supplier</h2>
                    <p className="font-sans  text-center md:text-center text-xs md:text-sm ">As a top-tier supplier of a wide variety of spices and dry foods, our commitment to excellence is evident in the exceptional quality <span className="md:flex justify-center">of our high-quality products .</span> </p>
                </div>

            </div>

        </div>
    );
};

export default WhyChoose;