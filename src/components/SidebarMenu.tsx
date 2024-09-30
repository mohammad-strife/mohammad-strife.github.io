import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineTicket } from "react-icons/hi";
import { IoExitOutline, IoOpen } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../app/slices/authSlice";
import { SlClose } from "react-icons/sl";
import linkedin from "../assets/images/LinkedIn_icon_circle.svg.png";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={isOpen ? "w-[200px]" : "w-[50px]"}>
      <div className="w-full shadow-3xl rounded-lg">
        <ul id={isOpen ? "sidbarOn" : "sidebarOff"} className="py-2">
          <li>
            <button
              type="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              {isOpen ? (
                <SlClose className="size-5" />
              ) : (
                <IoMenu
                  className={`size-5 ${isOpen ? "border-none" : "border-b"}`}
                />
              )}
            </button>
          </li>
          {isOpen ? (
            <li className="ml-4 mb-5 flex flex-col">
              <img src={linkedin} alt="" className="size-14 mx-auto" />
              <p className="text-center">محمد زارعی</p>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to="/profile">
              <BsPersonCircle className="size-5 my-3" />
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center">
              {/* <p>اعلان ها</p> */}
              <CiBellOn className="size-5 my-3" />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <HiOutlineTicket className="size-5 my-3" />
            </Link>
          </li>
          <li>
            <Link to="" onClick={logoutHandler}>
              <IoExitOutline className="size-5 my-3" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
