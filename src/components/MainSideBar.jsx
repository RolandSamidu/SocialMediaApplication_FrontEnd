import React from "react";
import { Link } from "react-router-dom";

const MainSideBar = ({ user }) => {
  return (
    <div>
      {" "}
      <div class=" flex flex-col bg-white">
        <aside class="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed  bg-white border-r border-r-dashed border-r-neutral-200   loopple-fixed-start">
          <div class="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

          <div class="flex items-center justify-between px-8 py-5">
            <div class="flex items-center mr-5">
              <div class="mr-5">
                <div class="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                  <img
                    className="w-[50px] h-[50px] shrink-0 inline-block rounded-full border-gray-400 border-2 "
                    src={user.profileImage}
                    alt="profile"
                  />
                </div>
              </div>
              <div class="mr-2 ">
                <p className="text-base font-bold uppercase ">{user.name}</p>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

          <div class="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

          <div class="relative pl-3 my-5 overflow-y-scroll">
            <div class="flex flex-col w-full font-medium">
              {/* <!-- menu item --> */}
              <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <Link
                    to="/"
                    class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Home
                  </Link>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <Link
                    to="/post"
                    class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Post
                  </Link>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Settings
                  </a>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div class="block pt-5 pb-[.15rem]">
                <div class="px-4 py-[.65rem]">
                  <span class="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                    Applications
                  </span>
                </div>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Users
                  </a>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Orders
                  </a>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Track Order
                  </a>
                </span>
              </div>

              {/* <!-- menu item --> */}
              <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a
                    href="javascript:;"
                    class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Products
                  </a>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainSideBar;
