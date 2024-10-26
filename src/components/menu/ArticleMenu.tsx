import { BsBarChartLine, BsBarChartLineFill } from "react-icons/bs";
import {
  IoHeartCircleOutline,
  IoHeartCircleSharp,
  IoBookmarksOutline,
  IoBookmarks,
  IoCheckmarkCircleOutline,
  IoCheckmarkCircle,
  IoDocumentTextOutline,
  IoDocumentText,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { RiMedalLine, RiMedalFill } from "react-icons/ri";
import linkedin from "@/assets/images/LinkedIn_icon_circle.svg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const showTitle = isOpen ? "block" : "hidden";
  return (
    <div className="col-span-12 md:col-span-3 relative p-2">
      <div
        className={`shadow-3xl flex flex-col rounded-lg p-2 ${
          isOpen ? "w-full" : "w-[65px]"
        }`}
      >
        <div
          className={`border-b-2 pb-4 ${
            isOpen
              ? "border-white"
              : "border-gray-400 text-center duration-1000 delay-500"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            {isOpen ? (
              <IoClose className="size-7 border p-1 border-black rounded-lg" />
            ) : (
              <IoMenu className="size-7" />
            )}
          </button>
          <img
            src={linkedin}
            alt=""
            className={`mx-auto ${isOpen ? "size-20 my-2" : `size-10 my-1`}`}
          />
          <p className={`text-center ${showTitle}`}>محمد زارعی</p>
        </div>
        <div
          id="list_icons"
          className={`space-y-4 text-gray-500 pt-4 ${isOpen ? "" : "mx-auto"}`}
        >
          <Link
            id="link_tag"
            to=""
            className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
          >
            <IoDocumentTextOutline id="outline_icons" className="size-7" />
            <IoDocumentText
              id="fill_icons"
              className="hidden size-7 text-blue-700"
            />
            <span className={showTitle}>نوشتن تجربه سفر جدید</span>
          </Link>
          <Link
            id="link_tag"
            to="/published-article"
            className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
          >
            <IoCheckmarkCircleOutline id="outline_icons" className="size-7" />
            <IoCheckmarkCircle
              id="fill_icons"
              className="hidden size-7 text-greenBlack"
            />
            <span className={showTitle}>تجربیات منتشر شده</span>
          </Link>
          <Link
            id="link_tag"
            to=""
            className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
          >
            <BsBarChartLine id="outline_icons" className="size-7" />
            <BsBarChartLineFill
              id="fill_icons"
              className="hidden size-7 text-btnOrange"
            />
            <span className={showTitle}>آمار بازدید مقاله ها</span>
          </Link>
          <Link
            id="link_tag"
            to=""
            className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
          >
            <IoHeartCircleOutline id="outline_icons" className="size-7" />
            <IoHeartCircleSharp
              id="fill_icons"
              className="hidden size-7 text-red-500"
            />
            <span className={showTitle}>سفرهای پیشنهادی</span>
          </Link>
          <Link
            id="link_tag"
            to=""
            className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
          >
            <IoBookmarksOutline id="outline_icons" className="size-7" />
            <IoBookmarks
              id="fill_icons"
              className="hidden size-7 text-slate-800"
            />
            <span className={showTitle}>مقالات ذخیره شده من</span>
          </Link>
          <Link
            id="link_tag"
            to=""
            className="flex items-center gap-2 hover:bg-hoverMenu rounded-md p-2"
          >
            <RiMedalLine id="outline_icons" className="size-7" />
            <RiMedalFill
              id="fill_icons"
              className="hidden size-7 text-sky-500"
            />
            <span className={showTitle}> امتیازات من</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleMenu;
