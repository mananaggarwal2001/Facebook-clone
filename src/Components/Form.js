import React from 'react'

const form = () => {
    return (
        <div className='flex flex-col justify-center relative'>
            <input className='p-4 h-12 my-2  border-2 border-gray-200 rounded-lg outline-blue-600' type="text" placeholder='Email Address Or Phone Number' />
            <input className='p-4 h-12 my-2  border-2 border-gray-200 rounded-lg outline-blue-600' type="password" placeholder='Password' />
            <button className="bg-blue-500 hover:bg-blue-600 text-white my-2 py-4 px-3 text-xl font-bold rounded-md">Log In</button>
            <span className='my-4 cursor-pointer text-blue-700 text-base hover:underline'>Forgottern Password?</span>
            <hr className='my-3' />
            <button className="bg-green-500 hover:bg-green-600 text-white my-2 p-4 text-xl font-bold rounded-md w-fit mx-auto">Create new Account</button>
            <div className=" absolute -bottom-24  p-4 text-center container">
                <span className='font-bold hover:underline cursor-pointer'>Create a Page</span> for a celebrity, brand or business.
            </div>
        </div>
    )
}

export default form