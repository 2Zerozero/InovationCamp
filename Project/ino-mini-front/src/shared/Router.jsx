import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Write from "../pages/Write/Write";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="write" element={<Write />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;