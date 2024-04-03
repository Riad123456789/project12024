import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import AllProducts from "../ALLProducts/AllProducts";
import GalleryPage from "../Gallery/GalleryPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactPage from "../Contact/ContactPage";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/About',
                element: <About></About>
            },
            {
                path: '/allProducts',
                element: <AllProducts></AllProducts>,
            },
            {
                path: '/gallery',
                element: <GalleryPage></GalleryPage>,
            },
            {
                path: '/contact',
                element:<ContactPage></ContactPage>,
            },

        ]


    },
]);

export default Router;
