import React, { lazy, Profiler, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { randomApi } from "./utils/apiSlice";

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    const [userInfo, setUserInfo]=useState();

    useEffect(()=>{
        const data = {
            name : "Akshay Saini",
        }
        setUserInfo(data.name);
    }, []);


    return(
        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser: userInfo}}>

        <div>
            <userContext.Provider value={{loggedInUser: "Elon Musk"}}>
                <Header/>
            </userContext.Provider>
            <Outlet/>
            <Footer/>
        </div>

        </userContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
                errorElement: <Error/>,
            },
            {
                path: "/about",
                element: <About/>,
                errorElement: <Error/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
                errorElement: <Error/>,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
                errorElement: <Error/>,
            },
            {
                path: "/library",
                element: 
                <Suspense fallback={<Shimmer/>}>
                            {/* <ApiProvider api={randomApi}> */}
                    <Grocery/>
                            {/* </ApiProvider> */}
                </Suspense>,
                errorElement: <Error/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
                errorElement: <Error/>,
            },
            {
                path: "/profile",
                element: <Profile/>,
                errorElement: <Error/>,
            }
        ]
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


