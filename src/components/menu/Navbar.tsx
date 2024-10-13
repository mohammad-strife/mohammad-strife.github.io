import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import safarImg from "../../assets/images/main-logo.png";
import { useSelector } from "react-redux";
import MainForm from "../authentication/MainForm";
import Offcanvans from "./Offcanvans";
const Navbar = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  return (
    <nav className="container mx-auto mb-10 px-2 md:px-0  ">
      <div className="flex items-center justify-center gap-4 pt-5">
        <Link to="/">
          <img src={safarImg} className="w-20" alt="" />
        </Link>
        <div
          className={`flex items-center p-4  rounded-lg gap-20 w-full justify-between border-blue-300 border-2 ${
            userInfo ? `bg-white` : `bg-bgNav`
          }`}
        >
          <div className="hidden md:flex items-center text-black gap-12 mr-6">
            <NavLink to="/articles">مقالات گردشگری</NavLink>
            <NavLink to="">ایران شناسی</NavLink>
            <NavLink to="">برنامه‌ ریزی‌ سفر</NavLink>
            <NavLink to="/new-experience">تجربه های سفر</NavLink>
            <NavLink to="" className="flex items-center justify-center gap-1">
              جستجو
              <FiSearch />
            </NavLink>
          </div>

          <div className="block md:hidden text-black">
            <Offcanvans />
          </div>
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
              className="bg-btnApp rounded-md px-2 py-1 text-center hidden md:block"
            >
              دانلود اپلیکیشن
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
