import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineTicket } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoMenu, IoClose, IoExitOutline } from "react-icons/io5";
import useGetUser from "@/hooks/useGetUser";
import LogoutModal from "../LogoutModal";
import { Button } from "../ui/button";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { user } = useGetUser();


  const showTitle = isOpen ? "block" : "hidden";

  return (
    <div
      className={`shadow-3xl flex flex-col rounded-lg p-2 mb-3 ${
        isOpen ? "w-[240px]" : "w-[65px]"
      }`}
    >
      <div
        className={`border-b-2 pb-4 ${
          isOpen
            ? "border-white"
            : "border-gray-400 text-center duration-1000 delay-500"
        }`}
      >
        <Button
          type="button"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? (
            <IoClose className="size-7 border p-1 border-black rounded-lg" />
          ) : (
            <IoMenu className="size-7" />
          )}
        </Button>
        <img
          src={user.photo}
          alt=""
          className={`mx-auto rounded-full ${
            isOpen ? "size-16 my-2" : `size-8 my-1`
          }`}
        />
        <p className={`text-center ${showTitle}`}>{user.name}</p>
      </div>
      <div
        id="list_icons"
        className={`space-y-4 text-gray-500 pt-4 ${isOpen ? "" : "mx-auto"}`}
      >
        <Link
          id="link_tag"
          to="/profile"
          className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
        >
          <BsPersonCircle />
          <span className={showTitle}>ویرایش پروفایل</span>
        </Link>

        <Link
          id="link_tag"
          to=""
          className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
        >
          <CiBellOn />
          <span className={showTitle}>اعلان ها</span>
        </Link>
        <Link
          id="link_tag"
          to="/my-tickets"
          className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
        >
          <HiOutlineTicket />
          <span className={showTitle}>تیکت ها</span>
        </Link>
        <Link
          id="link_tag"
          to=""
          className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
        >
          <IoExitOutline />
          <span className={`w-full ${showTitle}`}>
            <LogoutModal />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
