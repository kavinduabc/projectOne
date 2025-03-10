import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="w-full min-h-screen flex bg-slate-200 text-black">
      {/* Sidebar */}
      <div className="w-[300px] h-screen bg-slate-200 p-4 flex flex-col gap-4 shadow-lg fixed">
        <button className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg">
          <BsGraphDown className="text-xl" />
          Dashboard
        </button>
        <Link
          to="/admin/booking"
          className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg"
        >
          <FaRegBookmark className="text-xl" />
          Bookings
        </Link>
        <Link
          to="/admin/items"
          className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg"
        >
          <MdOutlineSpeaker className="text-xl" />
          Items
        </Link>
        <button className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg">
          <FaRegUser className="text-xl" />
          Users
        </button>
      </div>

      {/* Main Content */}
      <div className="w-[calc(100vw-300px)] bg-white p-6">
        <Routes>
          <Route path="/booking" element={<h1 className="text-3xl font-bold">Booking</h1>} />
          <Route path="/items" element={<h1 className="text-3xl font-bold">Items</h1>} />
        </Routes>
      </div>
    </div>
  );
}
