import { Link } from "react-router-dom";

const SideBar2 = () => {
  return (
    <div className="">
      <div class="flex flex-col bg-white">
        <aside class="right-0 fixed  lg:w-[300px] h-full w-[250px] border-l border-l-dashed border-l-neutral-200  ">
          <h1 className="text-center">users</h1>
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png"
              alt=""
              className="w-[40px] h-[40px] rounded-[.95rem]"
            />
            <h1>John Doe</h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png"
              alt=""
              className="w-[40px] h-[40px] rounded-[.95rem]"
            />
            <h1>John Doe</h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png"
              alt=""
              className="w-[40px] h-[40px] rounded-[.95rem]"
            />
            <h1>John Doe</h1>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default SideBar2;
