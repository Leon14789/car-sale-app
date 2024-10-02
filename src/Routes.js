import React,{Suspense, lazy} from "react";
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { CircularProgress } from "@mui/material";
import Auth from "./view/auth";





  function indexRoutes() {
    return (
    <Router>
        <Suspense fallback={ <div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress /> </div> }>
            <Routes>

                <Route exact path="/" Component={Auth} />
                <Route exact path="/login" Component={Auth} />
                <Route exact path="/vehicles" Component={() => (<h1>VOCE ESTA NA ROTA VEICULOS</h1>)} />
               
            </Routes>
        </Suspense>
    </Router>
)}


export default indexRoutes