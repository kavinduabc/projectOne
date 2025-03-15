import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-800 text-white shadow-xl  bottom-0">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center px-6 gap-12"> 
        {/* Increased gap-12 for better spacing */}
        
        {/* First Column: Conclusion */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">About FoodCity</h2>
          <p className="text-sm text-gray-300 max-w-xs self-start">
            Your one-stop destination for the freshest groceries, delicious meals, and everything food-related!
          </p>
        </div>

        {/* Second Column: Navigation Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">Company</h2>
          <div className="flex flex-col items-start gap-1">
            <Link to="/" className="text-sm hover:text-gray-400 transition">Home</Link>
            <Link to="/contact" className="text-sm hover:text-gray-400 transition">Contact</Link>
            <Link to="/items" className="text-sm hover:text-gray-400 transition">Items</Link>
            <Link to="/service" className="text-sm hover:text-gray-400 transition">Service</Link>
          </div>
        </div>

        {/* Third Column: Contact Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold ">Get in Touch</h2>
          <p className="text-sm">Phone: +1 234 567 890</p>
          <p className="text-sm">Email: support@foodcity.com</p>
        </div>

      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gray-700 my-6"></div>

      {/* Footer Bottom Text */}
      <p className="text-center text-sm text-gray-400">&copy; 2025 FoodCity | All Rights Reserved.</p>
    </footer>
  );
}
