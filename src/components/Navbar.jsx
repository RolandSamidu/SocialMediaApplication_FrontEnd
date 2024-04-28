import React from 'react'

const Navbar = ({user}) => {
  
  return (
    <div className="bg-indigo-500 flex w-full h-[70px] z-50">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <div className="text-white text-lg font-semibold">Social Fitness Club</div>
          <div className="flex items-center ml-6">
            {/* <div className="text-white text-sm font-semibold">Home</div>
            <div className="text-white text-sm font-semibold ml-6">About</div>
            <div className="text-white text-sm font-semibold ml-6">Contact</div> */}
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={user?.profileImage}
            alt="profile"
            className="w-[40px] h-[40px] rounded-full"
          />
          {/* <div className="text-white text-sm font-semibold">Login</div>
          <div className="text-white text-sm font-semibold ml-6">Register</div> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
