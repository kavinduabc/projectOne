 import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>

      <form className="space-y-6">
      
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Enter your email"
          />
        </div>

      
        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Enter your password"
          />
        </div>

       
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>

      
      <div className="text-center mt-4 text-gray-600">
        <p className="hover:text-blue-500 transition cursor-pointer">Forgot password?</p>
        <p className="mt-2">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login 