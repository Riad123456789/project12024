import img from "../../public/Animation - 1711701989131.json"
import Lottie from "lottie-react";
const Loader = () => {
    return (
        <div className='flex items-center justify-center h-[100vh]'>
          
          <Lottie className="" animationData={img}></Lottie>

        </div>
    );
};

export default Loader;