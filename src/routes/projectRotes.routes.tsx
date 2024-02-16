import { Outlet } from "react-router-dom";
import {Home} from "../pages/home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";


export const allProjectRoutes={
    
    path:'/pro',

    element:<>
    <Outlet></Outlet> </>,
    children:[
        {
            path:'Home',
            element:<Home/>
        },{
            path:'Login',
            element:<Login/>

        },{
            path:'Register',
            element:<Register/>
        }
    ]
   
}