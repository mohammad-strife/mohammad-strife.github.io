import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import linkedin from "@/assets/images/LinkedIn_icon_circle.svg.png";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import banana from "@/assets/videos/banana.mp4";
import axios from "@/api/axios";
import { IoDocumentTextOutline, IoDocumentText } from "react-icons/io5";
import { IoCheckmarkCircleOutline, IoCheckmarkCircle } from "react-icons/io5";
import { BsBarChartLine, BsBarChartLineFill } from "react-icons/bs";
import { IoHeartCircleOutline, IoHeartCircleSharp } from "react-icons/io5";
import { IoBookmarksOutline, IoBookmarks } from "react-icons/io5";
import { RiMedalLine, RiMedalFill } from "react-icons/ri";
import CkEditor from "@/components/articles/CkEditor";

const NewExperience = () => {
  const [editorData, setEditorData] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e: any) => {
    try {
      e.prevetDefault();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post("", JSON.stringify(editorData), {
        headers: { "Content-Type": "application/json" },
      });

      console.log(response);

      return navigate("/publish-article");
    } catch (error) {
      console.log(error);
    }
  };
  const [isOpen, setIsOpen] = useState(true);
  const showTitle = isOpen ? "block" : "hidden";
  return (
    <section className="container mx-auto my-5">
      <div className="grid grid-cols-12">
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
                className={`mx-auto ${
                  isOpen ? "size-20 my-2" : `size-10 my-1`
                }`}
              />
              <p className={`text-center ${showTitle}`}>محمد زارعی</p>
            </div>
            <div
              id="list_icons"
              className={`space-y-4 text-gray-500 pt-4 ${
                isOpen ? "" : "mx-auto"
              }`}
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
                <IoCheckmarkCircleOutline
                  id="outline_icons"
                  className="size-7"
                />
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
        <div className="col-span-12 md:col-span-9 p-2">
          <video controls className="rounded-xl">
            <source src={banana} type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
      </div>

      <div className="space-y-5 mt-28 pb-5 border-b border-gray-500">
        <p className="text-profile text-3xl">نوشتن تجربه جدید از سفر</p>
        <p className="text-lg w-7/12">
          توی این بخش میتونی تجربه هایی که از سفرت به یه مکان یا شهری که رفتی رو
          بنویسی و اونو در سایت منتشر کنی تا بقیه هم از تجربه ات استفاده کنن و
          هم اینکه جزو نویسنده های سایت ما بشی، اگه نمیدونی چطوری باید یه مقاله
          بنویسی بهت پیشنهاد میکنم فیلم آموزشی بالا که در مورد مقاله نویسی با
          هوش مصنوعی که میتونه بهت کمک زیادی بهت بکنه رو تماشا کن.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-12 gap-10 my-10">
        <div className="col-span-12 flex flex-col">
          <label htmlFor="titleArticle">عنوان مقاله</label>
          <input
            type="text"
            placeholder="عنوان"
            id="titleArticle"
            className="w-1/3 rounded-md bg-stone-300 text-black p-2"
          />
        </div>
        <div className="col-span-12 space-y-10">
          <CkEditor setEditorData={setEditorData} />
          <div className="text-left">
            <button
              type="button"
              className="rounded-md bg-inputTicket p-5 px-10 mx-2"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="rounded-md bg-btnOrange p-5 px-10 mr-2"
            >
              ادامه
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default NewExperience;
