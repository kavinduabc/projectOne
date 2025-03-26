import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

export default function ErrorNotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md w-full">
                <h1 className="text-5xl font-bold text-gray-800 mb-2">Oops!</h1>
                <p className="text-xl text-red-500 mb-6">404 - Page Not Found</p>
                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link 
                    to="/" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 my-6 text-white rounded-lg transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}