import { createBrowserRouter } from "react-router-dom";
import SeeAllServices from "../../HomeSectionDesign/SeeAllServices";
import Single from "../../HomeSectionDesign/Single";
import Main from "../../layout/Main";
import AddServices from "../../Pages/AddServices";
import Blog from "../../Pages/Blog";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import MyReview from "../../Pages/MyReview";
import Register from "../../Pages/Register";
import ReviewPrivateRoute from "../../Pages/ReviewPrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b-assignment-11-server.vercel.app/services'),
            },
            {
                path: '/all',
                element: <SeeAllServices></SeeAllServices>,
                loader: () => fetch('https://b-assignment-11-server.vercel.app/servicess'),
            },
            {
                path: '/services/:id',
                element: <Single></Single>,
                loader: async ({params}) =>  fetch(`https://b-assignment-11-server.vercel.app/services/${params.id}`)
            },      
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
            {
                path:'/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
            },
            {
                path:'/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
            },      
            {
                path:'/reviewPrivate/:id',
                element: <PrivateRoute><ReviewPrivateRoute></ReviewPrivateRoute></PrivateRoute>,
                loader: async ({params}) =>  fetch(`https://b-assignment-11-server.vercel.app/services/${params.id}`)
            },   
        ]
    },
    {path: '*', element: <div><h1>404 Not Found Your Data</h1></div>}
])