// import React, { useEffect, useState } from 'react'
// import  useCreateContext  from './src/utils/useUserName';
// import hotelListContext from './src/utils/hotelListContext';
// import {
//     RouterProvider, createBrowserRouter,
//     Outlet
// } from "react-router-dom";
// import ReactDOM from 'react-dom/client'
// import Header from './src/components/Header'
// import Body from './src/components/Body'
// import Home from './src/pages/Home';
// import About from './src/pages/About';
// import Contact from './src/pages/Contact';
// import Settings from './src/pages/Settings';
// import Footer from './src/components/Footer'
// import { swiggyUrl } from './src/utils/url'
// import MenuCard from './src/components/MenuCard';
// import useOfficialUrl from './src/utils/useOfficialUrl';

// import { lazy, Suspense } from 'react'

// import Grocery from "./src/pages/Grocery";



// let App = () => {
// const url = useOfficialUrl()
// const [user,setUser ] = useState(
//     {
//         name : "default",
//         location : "default location"
//     }
// )

// const [hotelList,setHotelList] = useState(null)
// const [allItems,setAllItems] = useState(null)
//     return (
//         <div>
//             <hotelListContext.Provider value= {{hotelList,setHotelList,setAllItems,allItems}}>
//             <useCreateContext.Provider value={user} url={url}>

//                 <Header />
//                 <Outlet />
//                 <Footer />
//             </useCreateContext.Provider>
//             </hotelListContext.Provider>
//         </div>
//     )
// }

// let appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/about',
//                 element: <About />
//             },
//             {
//                 path: '/contact',
//                 element: <Contact />
//             },
//             {
//                 path: '/settings',
//                 element: <Settings />
//             },
//             {
//                 path: '/menuCard/:id',
//                 element: <MenuCard />
//             },
//             {
//                 path: '/grocery',
//                 element: <Grocery />
//             },

//         ]
//     }
// ])


// let root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(<RouterProvider router={appRouter} />)





import React, { useState } from 'react'
import useCreateContext from './src/utils/useUserName'
import hotelListContext from './src/utils/hotelListContext'

import {
    RouterProvider,
    createBrowserRouter,
    Outlet
} from "react-router-dom"

import ReactDOM from 'react-dom/client'

import Header from './src/components/Header'
import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'
import Settings from './src/pages/Settings'
import Footer from './src/components/Footer'
import MenuCard from './src/components/MenuCard'
import useOfficialUrl from './src/utils/useOfficialUrl'
import Grocery from './src/pages/Grocery'


const AppContent = () => {

    const url = useOfficialUrl()

    const [user, setUser] = useState({
        name: "default",
        location: "default location"
    })

    return (
        <useCreateContext.Provider value={user}>
            <Header />
            <Outlet />
            <Footer />
        </useCreateContext.Provider>
    )
}


const App = () => {

    const [hotelList, setHotelList] = useState(null)
    const [allItems, setAllItems] = useState(null)

    return (
        <hotelListContext.Provider
            value={{
                hotelList,
                setHotelList,
                setAllItems,
                allItems
            }}
        >
            <AppContent />
        </hotelListContext.Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/menuCard/:id',
                element: <MenuCard />
            },
            {
                path: '/grocery',
                element: <Grocery />
            }
        ]
    }
])


const root = ReactDOM.createRoot(
    document.querySelector("#root")
)

root.render(
    <RouterProvider router={appRouter} />
)
