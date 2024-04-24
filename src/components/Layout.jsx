import React, { useEffect, useState } from "react";
import MainSideBar from "./MainSideBar";
import Navbar from "./Navbar";
import SideBar2 from "./SideBar2";

const Layout = ({ children }) => {
  const [user, setUser] = useState({});

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "/login";
  }
  setUser(user);
}, []);

  return (
    <div className="flex h-full">
      <div className="flex w-full fixed  ">
        <Navbar />
      </div>
      <div className="flex  mt-[70px]  w-full ">
        <div className=" flex lg:w-[300px] w-[250px] ">
          <MainSideBar user={user} />
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
