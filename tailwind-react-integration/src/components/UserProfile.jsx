import React from 'react'

const UserProfile = () => {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 ms:max-w-xs  md:max-w-sm mx-auto,ms:my-10 md:my-20 rounded-lg shadow-lg">
        <img className=" hover:scale-110 transition-transform duration-300 ease-in-out rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto "src="https://via.placeholder.com/150" alt="User" />
        <h1 className="md:text-xl ms:text-lg text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>

    </div>
  )
}

export default  UserProfile;   
