import { Link } from "react-router-dom";

export default function Header(){
    return(
         <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative">
            <img src='/cart.webp' alt="logo" className="w-[100px] h-[100px] object-cover absolute left-1"/>
            <Link to='/' className="text-[20px] font-bold m-2">HOME</Link>
            <Link to='/contact' className="text-[20px] font-bold m-2">CONTACT</Link>
            <Link to='/items' className="text-[20px] font-bold m-2">ITEMS</Link>
            <Link to='/login' className="text-[20px] font-bold m-2">LOGIN</Link>
        </header>
 
        
    )
}