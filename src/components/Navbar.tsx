import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import safarImg from "../assets/images/LinkedIn_icon_circle.svg.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/slices/authSlice";
import MainForm from "./MainForm";
const Navbar = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <nav className="relative my-4 container mx-auto">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center py-5 p-4 text-white rounded-lg bg-bgNav gap-20">
          <div className="flex gap-3">
            <NavLink to="" className="bg-btnApp rounded-md px-2 py-1">
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
                  {/* <p>{userInfo.data.username}</p> */}
                </>
              ) : (
                <MainForm />
              )}
            </div>
            {/* <button onClick={dispatch(logOut())}>خروج</button> */}
          </div>
          <div className="flex gap-10">
            <NavLink to="">
              <span className="flex items-center gap-2">
                <FiSearch />
                جستجو
              </span>
            </NavLink>
            <NavLink to="">تجربه های سفر</NavLink>
            <NavLink to="">برنامه‌ ریزی‌ سفر</NavLink>
            <NavLink to="">ایران شناسی</NavLink>
            <NavLink to="">مقالات گردشگری</NavLink>
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
