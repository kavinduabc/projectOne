import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Contact from "./contact";
import Items from "./items";
import Login from "./login";
import Home from "./home";
import ErrorNotFound from "./error";

export default function HomePage(){
    return(
        <div>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full bg-slate-400">
            <Routes path='/*'>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/items" element={<Items/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<ErrorNotFound/>}/>
            </Routes>
            </div>
        </div>
    )
}