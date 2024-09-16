import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import safarImg from "../assets/images/LinkedIn_icon_circle.svg.png";
import Signup from "./Signup";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../state/auth/authSlice";
import MainForm from "./MainForm";
const Navbar = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="relative my-4 container mx-auto">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center py-5 p-4 text-white rounded-lg bg-bgNav gap-20">
          <div className="flex gap-3">
            <NavLink to="" className="bg-btnApp rounded-md p-2">
              دانلود اپلیکیشن
            </NavLink>
            <div className="">
              {userInfo ? (
                <>
                  <p>{userInfo.data.username}</p>
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
