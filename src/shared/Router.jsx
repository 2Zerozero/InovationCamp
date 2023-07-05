import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Detail from "../Pages/Detail/Detail"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
                <Route />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
// React Router Dom
/*
01. BrouserRouter
02. Routes path="경로" element={경로}
03. Route
*/