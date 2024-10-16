import React,{Suspense, lazy} from "react";
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { CircularProgress } from "@mui/material";

const Auth = lazy(() => import('./view/auth'))
const Vehicles = lazy(() => import('./view/vehicles'))
const Register = lazy(() => import('./view/register'))



  function indexRoutes() {
    return (
    <Router>
        <Suspense fallback={ <div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress /> </div> }>
            <Routes>

                <Route path="/" Component={Auth} />
                <Route exact path="/login" Component={Auth} />

                <Route path="/vehicles" Component={Vehicles} />
                <Route path="/register" Component={Register} />


               
            </Routes>
        </Suspense>
    </Router>
)}


export default indexRoutes