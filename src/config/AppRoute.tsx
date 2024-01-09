import { Route,BrowserRouter,Routes } from "react-router-dom";
import Home from "../Screen/Home";
import Detail from "../Screen/Detail";

export default function AppRoute() {
    return <>
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Detail" element={<Detail/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
}