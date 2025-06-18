import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeaderBlock from '../shareModule/HeaderBlock/HeaderBlock';
import Footer from '../shareModule/Footer/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import CustLoad from "../shareModule/CustomLoader/CustLoad";
import {  lazy, Suspense } from "react";
import { check_myname, check_token } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import("../components/home/home"));

const Registration = lazy(() => import("../components/registration/registration"));
const LogIn = lazy(() => import("../components/login/login"));




export default function Rout(){
    const dispatch = useDispatch()
   
const PublicRouteNames = [
    {
        path: "/register",
        Component: <Registration/>
    },
    {
        path: "/login",
        Component: <LogIn/>
    },
];

const PrivateRouteNames = [
    {
        path: "/",
        Component: <Home/>

    },
    
    
]

useEffect(() => {
  dispatch(check_token())
}, []);

useEffect(() => {
    dispatch(check_myname())
}, []);
    
    function PrivateRoute({ children }) {  
        const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
          
        return token !== null && token !== undefined  ? (
          children
        ) : (
           <Navigate to="/login" />
        ); 
      }
    return (
        <>
        <Suspense fallback = {<CustLoad />}>
             <Router>
                 <HeaderBlock />
                 <Routes>

                    {PublicRouteNames?.map((route, index) => {
                        return (
                            <Route key={index + 1}
                                exact path={route.path} element={route.Component}>
                            </Route>
                        );
                    })}
                         {/*************  protected routes ********************/}
                    {PrivateRouteNames?.map((route, index) => {
                         return (
                            <Route
                              key={index + 2}
                              path={route.path}
                              element={<PrivateRoute>{route.Component}</PrivateRoute>}
                            />
                          );
                    })

                    }     
                 </Routes>
                 <Footer />
                
             </Router>
         </Suspense>
         </>
     )

 }