import { Link } from "react-router-dom";
import { RxTextAlignJustify } from "react-icons/rx";
import { useState } from "react";
import { Input } from "../ui/input";
import { RiSearch2Line } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { LiaMapMarkedSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const Offcanvans = () => {
  const [term, setTerm] = useState("");
  return (
    <>
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
            <RxTextAlignJustify className="size-7" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-white text-base-content min-h-full w-80 p-4">
            <span className="my-5 text-white w-6">
              <label
                htmlFor="my-drawer"
                className="drawer-button cursor-pointer"
              >
                <CgClose className="border border-black text-black rounded-sm size-6 p-1" />
              </label>
            </span>
            <form className="">
              <Input
                type="text"
                className="rounded-md text-gray-500 border-btnApp focus:border-btnOrange my-5"
                placeholder="جستحو کنید"
                onChange={(e) => setTerm(e.target.value)}
                required
                value={term}
              />
              <div className="relative">
                <RiSearch2Line className="text-gray-500 mt-3 absolute bottom-8 right-20" />
              </div>
            </form>

            <ul className="">
              {/* Sidebar content here */}
              <li>
                <Link to="" className="flex items-center gap-1 my-2">
                  <CiMobile3 className="text-3xl" />
                  دانلود اپلیکیشن سفرکو
                </Link>
              </li>
              <li>
                <Link to="" className="flex items-center gap-1 my-2">
                  <CgFileDocument className="text-3xl" />
                  مقالات گردشگری
                </Link>
              </li>
              <li>
                <Link to="" className="flex items-center gap-1 my-2">
                  <LiaMapMarkedSolid className="text-3xl" />
                  ایران شناسی
                </Link>
              </li>
              <li>
                <Link to="" className="flex items-center gap-1 my-2">
                  <IoCalendarOutline className="text-3xl" />
                  برنامه ریزی سفر
                </Link>
              </li>
              <li>
                <Link to="" className="flex items-center gap-1 my-2">
                  <FaRegFaceGrinBeam className="text-3xl" />
                  تجربه های سفر
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvans;
