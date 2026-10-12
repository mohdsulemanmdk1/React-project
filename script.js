import React, { useEffect, useState } from 'react'

import { RouterProvider, createBrowserRouter,
    Outlet
 } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Settings from './src/pages/Settings';
import Footer from './src/components/Footer'
import { swiggyUrl } from './src/utils/url'
import MenuCard from './src/components/MenuCard';

let App = ()=>{


    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

let appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/settings',
                element: <Settings/>
            },
            {
                path: '/menuCard/:id',
                element: <MenuCard/>
            }
        ]
    }
])


let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<RouterProvider router={appRouter}/>)