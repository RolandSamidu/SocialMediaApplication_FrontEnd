import React from "react";
import MainSideBar from "./MainSideBar";
import Navbar from "./Navbar";
import SideBar2 from "./SideBar2";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="flex w-full fixed ">
        <Navbar />
      </div>
      <div className="flex  mt-[70px] h-screen w-full">
        <div className=" flex lg:w-[300px] w-[250px] ">
          <MainSideBar />
        </div>
        <div className="flex-1 ">{children}</div>
        <div className="flex lg:w-[300px] w-[250px]">
          <SideBar2 />
        </div>
      </div>
    </div>
  );
};

export default Layout;
