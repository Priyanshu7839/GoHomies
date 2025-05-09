import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { element } from "prop-types";
import LandingPage from "../Pages/LandingPage";
import SignIn from "../sign-in/SignIn";
import SignUp from '../sign-up/SignUp';

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
    }
])

export default Routers