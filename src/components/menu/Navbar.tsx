import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import safarImg from "../../assets/images/main-logo.png";
import { useSelector } from "react-redux";
import MainForm from "../authentication/MainForm";
import Offcanvans from "./Offcanvans";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto mb-10 px-2 md:px-0">
      <div className="flex items-center justify-center gap-4 pt-5">
        <Link to="/" className="hidden md:block">
          <img src={safarImg} className="w-20" alt="" />
        </Link>
        <div className="flex items-center p-3 md:p-5 rounded-lg gap-20 w-full justify-between bg-bgNav">
          {isOpen ? (
            <div className="flex justify-between w-full">
              <div className="w-8/12 md:w-5/12 relative">
                <Input
                  placeholder="مطلب مورد نظرت رو جستجو کن"
                  className="border border-btnOrange"
                />
                <IoArrowBackCircleSharp className="absolute left-2 top-3 text-btnOrange" />
              </div>
              <div className="">
                <Button
                  className="text-xl"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  بازگشت
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="hidden lg:flex items-center text-white gap-12 mr-6">
                <NavLink to="/articles">مقالات گردشگری</NavLink>
                <NavLink to="">ایران شناسی</NavLink>
                <NavLink to="">برنامه‌ ریزی‌ سفر</NavLink>
                <NavLink to="/new-experience">تجربه های سفر</NavLink>
                <Button
                  className="flex items-center justify-center gap-1"
                  onClick={() => setIsOpen((prevState) => !prevState)}
                >
                  جستجو
                  <FiSearch />
                </Button>
              </div>

              <div className="lg:hidden">
                <Offcanvans />
              </div>
              <Link to="/" className="block md:hidden pr-8 md:pr-0">
                <img src={safarImg} className="w-12" alt="" />
              </Link>
              <div className="flex gap-3">
                <div className="flex items-center">
                  {userInfo ? (
                    <NavLink
                      to="/profile"
                      className="border-2 border-btnOrange rounded-md px-2 py-1 text-black"
                    >
                      <span className="flex items-center gap-2">
                        پروفایل <FaUser />
                      </span>
                    </NavLink>
                  ) : (
                    <MainForm />
                  )}
                </div>
                <NavLink
                  to=""
                  className="bg-btnApp rounded-md px-2 py-1 text-center hidden md:block text-white"
                >
                  دانلود اپلیکیشن
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
