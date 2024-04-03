
import { Outlet } from "react-router-dom";
import Foother from "../Component/Foother";
import Navber from "../Component/Navber";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";







const MainLayout = () => {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5500)
    })
    return (
        <div>
            {
                isLoading ? <Loader></Loader> :
                    <Navber>
                        <Outlet></Outlet>
                        <Foother></Foother>
                    </Navber>
            }

        </div>
    );
};

export default MainLayout;