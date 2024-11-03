import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxTextAlignJustify } from "react-icons/rx";
import { Input } from "../ui/input";
import { RiSearch2Line } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { LiaMapMarkedSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const OffCanvas: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button */}
      <button onClick={toggleOffCanvas} className="p-2 rounded-md">
        <RxTextAlignJustify className="size-7" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleOffCanvas} // Clicking outside will close it
        />
      )}

      {/* Off-canvas panel */}
      <div
        className={`fixed inset-y-0 right-0 transform p-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 w-80 bg-white shadow-lg`}
      >
        {/* Close button */}
        <button onClick={toggleOffCanvas} className="p-2 text-gray-600">
          <span className="my-5 text-white w-6">
            <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
              <CgClose className="border border-black text-black rounded-sm size-6 p-1" />
            </label>
          </span>
        </button>

        {/* Off-canvas content */}

        <form className="">
          <Input
            type="text"
            className="rounded-md text-gray-500 border-btnApp focus:border-btnOrange my-5"
            placeholder="جستحو کنید"
          />
          <div className="relative">
            <RiSearch2Line className="text-gray-500 mt-3 absolute bottom-8 right-20" />
          </div>
        </form>

        <div className="">
          <Link to="" className="flex items-center gap-1 my-2 hover:bg-gray-100 p-2 rounded-lg">
            <CiMobile3 className="text-3xl" />
            دانلود اپلیکیشن سفرکو
          </Link>

          <Link to="" className="flex items-center gap-1 my-2 hover:bg-gray-100 p-2 rounded-lg">
            <CgFileDocument className="text-3xl" />
            مقالات گردشگری
          </Link>

          <Link to="" className="flex items-center gap-1 my-2 hover:bg-gray-100 p-2 rounded-lg">
            <LiaMapMarkedSolid className="text-3xl" />
            ایران شناسی
          </Link>

          <Link to="" className="flex items-center gap-1 my-2 hover:bg-gray-100 p-2 rounded-lg">
            <IoCalendarOutline className="text-3xl" />
            برنامه ریزی سفر
          </Link>

          <Link to="" className="flex items-center gap-1 my-2 hover:bg-gray-100 p-2 rounded-lg">
            <FaRegFaceGrinBeam className="text-3xl" />
            تجربه های سفر
          </Link>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
