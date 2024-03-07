import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="bg-[#202020ec] flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <form>
                   
                    <div className="mb-4">
                        <label for="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
                        <input type="text" 
                        id="username" 
                        name="username" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                
                    <div className="mb-4">
                        <label for="fullname" className="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                        <input type="text" id="fullname" name="fullname" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
                    </div>

               
                    <div className="mb-4">
                        <label for="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

            
                    <div className="mb-4">
                        <label for="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                   
                    <div className="mb-4">
                        <label for="avatar" className="block text-gray-600 text-sm font-medium mb-2">Avatar/User Image</label>
                        <input type="file" id="avatar" name="avatar" accept="image/*" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                    <div>
                        already have any account plz ? <Link to="/login">Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
