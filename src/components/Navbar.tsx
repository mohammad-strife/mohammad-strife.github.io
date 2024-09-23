import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import safarImg from "../assets/images/LinkedIn_icon_circle.svg.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/slices/authSlice";
import MainForm from "./MainForm";
import Offcanvans from "./Offcanvans";
const Navbar = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <nav className="relative my-4 container mx-auto">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center py-5 p-4 text-white rounded-lg bg-bgNav gap-20 w-2/3 justify-between">
          <div className="flex gap-3">
            <NavLink to="" className="bg-btnApp rounded-md px-2 py-1 text-center hidden md:block">
              دانلود اپلیکیشن
            </NavLink>
            <div className="flex items-center">
              {userInfo ? (
                <>
                  <NavLink
                    to="/profile"
                    className="border-2 border-btnOrange rounded-md px-2 py-1 text-black"
                  >
                    <span className="flex items-center gap-2">
                      پروفایل <FaUser />
                    </span>
                  </NavLink>
                  <button onClick={logoutHandler}>exit</button>
                </>
              ) : (
                <MainForm />
              )}
            </div>
          </div>
          <div className="block md:hidden">
            <Offcanvans />
          </div>
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 md:gap-6 text-center">
            <NavLink to="">
              <span className="flex items-center justify-center">
                <FiSearch />
                جستجو
              </span>
            </NavLink>
            <NavLink to="">تجربه های سفر</NavLink>
            <NavLink to="">برنامه‌ ریزی‌ سفر</NavLink>
            <NavLink to="">ایران شناسی</NavLink>
            <NavLink to="" className="">مقالات گردشگری</NavLink>
          </div>
        </div>
        <div className="">
          <img src={safarImg} className="h-16" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
