import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="w-full min-h-screen flex bg-gray-100 text-black">
      
      {/* Sidebar with right border */}
      <div className="w-[300px] h-screen bg-white p-4 flex flex-col gap-4 shadow-lg border-r border-gray-400">
        <button className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg border border-gray-300">
          Dashboard
        </button>
        <Link
          to="/admin/booking"
          className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg border border-gray-300"
        >
          Bookings
        </Link>
        <Link
          to="/admin/items"
          className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg border border-gray-300"
        >
          Items
        </Link>
        <button className="w-full h-[50px] text-[20px] font-bold flex items-center gap-2 p-2 hover:bg-gray-300 rounded-lg border border-gray-300">
          Users
        </button>
      </div>

      {/* Main content with left border */}
      <div className="w-[calc(100vw-300px)] bg-white p-6 border-l-2 border-gray-500">
        <Routes>
          <Route path="/booking" element={<h1 className="text-3xl font-bold">Booking</h1>} />
          <Route path="/items" element={<h1 className="text-3xl font-bold">Items</h1>} />
        </Routes>
      </div>
    </div>
  );
}

