import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[100px] shadow-xl flex justify-end items-center px-6">
    <img src='/cart.webp' alt="logo" className="w-[100px] h-[100px] object-cover absolute left-0"/>
      <nav className="flex space-x-6">
        <Link to="/" className="text-[15px] font-bold hover:text-gray-500">
          HOME
        </Link>
        <Link to="/contact" className="text-[15px] font-bold hover:text-gray-500">
          CONTACT
        </Link>
        <Link to="/items" className="text-[15px] font-bold hover:text-gray-500">
          ITEMS
        </Link>
        <Link to="/service" className="text-[15px] font-bold hover:text-gray-500">
          SERVICE
        </Link>
        <Link to="/login" className="text-[15px] font-bold hover:text-gray-500">
          LOGIN
        </Link>
      </nav>
    </header>
  );
}
