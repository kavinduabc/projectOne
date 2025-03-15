import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Contact from "./contact";
import Items from "./items";
import Login from "./login";
import Home from "./home";
import ErrorNotFound from "./error";
import Footer from "../../components/footer";
import Service from "./service";


export default function HomePage(){
    return(
        <div>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full bg-slate-200">
            <Routes path='/*'>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/items" element={<Items/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<ErrorNotFound/>}/>
            </Routes>
            <Footer/>
            </div>
        </div>
    )
}