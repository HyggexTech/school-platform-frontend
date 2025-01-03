import { createBrowserRouter } from "react-router-dom";
import Test from "@/pages/Test"
import Login from "@/pages/Authentication/Login";
import Onboarding from "@/pages/Authentication/Onboarding";
import SelectLanguage from "@/pages/Authentication/Onboarding/SelectLanguage";
import SchoolDetails from "@/pages/Authentication/Onboarding/SchoolDetails";
import SelectCategory from "@/pages/Authentication/Onboarding/SelectCategory";
import Signup from "@/pages/Authentication/Onboarding/Signup";
import WelcomeProcess from "@/pages/Welcome";
import DataUploading from "@/pages/Welcome/DataUploading";

export const AppRoutes = createBrowserRouter([
  
    {
        path : '/test',
        element : <Test />
    },
    {
        path: '/',
        element : <Test />
    }, 
    {
        path: '/login',
        element: <Login />
    },
    {
        path : '/onboarding',
        element : <Onboarding />
    },
    {
        path : '/welcome',
        element : <WelcomeProcess />
    },
    {
        path : '/data-upload',
        element : <DataUploading />
    }
])