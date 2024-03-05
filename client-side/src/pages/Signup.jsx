import React from 'react'

const Signup = () => {
    return (
        <div class="bg-gray-100 flex items-center justify-center h-screen">
            <div class="bg-white p-8 rounded shadow-md w-96">
                <h2 class="text-2xl font-semibold mb-6">Sign Up</h2>
                <form>
                   
                    <div class="mb-4">
                        <label for="username" class="block text-gray-600 text-sm font-medium mb-2">Username</label>
                        <input type="text" id="username" name="username" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                
                    <div class="mb-4">
                        <label for="fullname" class="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                        <input type="text" id="fullname" name="fullname" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required/>
                    </div>

               
                    <div class="mb-4">
                        <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

               
                    <div class="mb-4">
                        <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                   
                    <div class="mb-4">
                        <label for="avatar" class="block text-gray-600 text-sm font-medium mb-2">Avatar/User Image</label>
                        <input type="file" id="avatar" name="avatar" accept="image/*" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>

                
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
