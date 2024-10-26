import { BsPersonCircle } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineTicket } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../../app/slices/authSlice";

const MobileProfileMenu = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="flex md:hidden justify-between bg-white p-2 rounded-lg mb-5">
      <Link to="/" className="hover:bg-hoverMenu p-2 rounded-lg text-gray-600">
        <BsPersonCircle className="size-5" />
      </Link>
      <Link to="/" className="hover:bg-hoverMenu p-2 rounded-lg text-gray-600">
        <CiBellOn className="size-5" />
      </Link>
      <Link to="/" className="hover:bg-hoverMenu p-2 rounded-lg text-gray-600">
        <HiOutlineTicket className="size-5" />
      </Link>
      <Link
        to="/"
        onClick={() => logoutHandler()}
        className="hover:bg-hoverMenu p-2 rounded-lg text-gray-600"
      >
        <IoExitOutline className="size-5 rotate-180" />
      </Link>
    </div>
  );
};

export default MobileProfileMenu;
