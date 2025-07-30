import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { element } from "prop-types";
import LandingPage from "../Pages/LandingPage";
import SignIn from "../sign-in/SignIn";
import SignUp from '../sign-up/SignUp';
import UserProfile from "../Pages/UserProfilePage/UserProfile";
import AboutUs from "../Pages/AboutUsPage/AboutUs";
import ContactUs from "../Pages/ContactUsPage/ContactUs";

const Routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<LandingPage/>
            }
        ]
    },
    {
        path:'/signin',
        element:<SignIn/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/userprofile',
        element:<UserProfile/>
    },
    {
        path: '/about_us',
        element: <AboutUs/>
    },
    {
        path: '/contact_us',
        element: <ContactUs/>
    }
])

export default Routers