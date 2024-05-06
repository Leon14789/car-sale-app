import React,{Suspense, lazy} from "react";
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { CircularProgress } from "@mui/material";






  function indexRoutes() {
    return (
    <Router>
        <Suspense fallback={ <div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress /> </div> }>
            <Routes>

               
            </Routes>
        </Suspense>
    </Router>
)}


export default indexRoutes