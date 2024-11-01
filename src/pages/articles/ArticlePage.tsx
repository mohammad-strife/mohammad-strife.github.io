import share from "@/assets/images/share.png";
import saftCo from "@/assets/images/main-logo.png";
import { IoCalendarOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import articleImg from "@/assets/images/footer-image.png";
import { useLoaderData } from "react-router-dom";

const ArticlePage = () => {
  const article: any = useLoaderData();
  return (
    <section className="container mx-auto px-10">
      <div className="md:hidden items-center gap-3 flex">
        <img
          src={saftCo}
          alt=""
          className="size-10 border border-sky-300 rounded-full"
        />
        <span>علرضا قربانی</span>
      </div>
      <p
        className="text-3xl"
        dangerouslySetInnerHTML={{ __html: article.title }}
      ></p>
      <div className="grid grid-cols-12 md:border-b md:border-gray-700 mb-6">
        <div className="col-span-12 md:col-span-6 flex">
          <span
            className="my-5"
            dangerouslySetInnerHTML={{ __html: article.body }}
          ></span>
        </div>
        <div className="col-span-4 col-start-9 flex items-center">
          <button className="border-2 border-btnOrange rounded-md py-1 px-2 hidden md:flex items-center ml-4">
            <img src={share} alt="" className="size-5" />
            <p className=""> اشتراک گذاری</p>
          </button>
          <div className="border-r border-gray-800 pr-4 hidden md:flex items-center gap-3">
            <img
              src={saftCo}
              alt=""
              className="size-10 border border-sky-300 rounded-full"
            />
            <span>علرضا قربانی</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b border-gray-800 md:border-0 mb-10 pb-5">
        <div className="">
          <p className="my-2 flex items-center gap-2 text-gray-400">
            <IoCalendarOutline />
            <small>شنبه,۱۱ ازدیبهشت ۱۴۰۳</small>
          </p>
          <p className="my-2 flex items-center gap-1 text-gray-400">
            <FiClock />
            <small> ۱۱:۳۴</small>
          </p>
        </div>
        <div className="flex items-end">
          <button className="border-2 border-btnOrange rounded-md py-1 px-2 flex md:hidden items-center">
            <img src={share} alt="" className="size-5" />
            <p className=""> اشتراک گذاری</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-10">
        <img src={articleImg} alt="" className="col-span-10 rounded-md" />
        <div className="col-span-12">{/* <ArticleData /> */}</div>
      </div>
    </section>
  );
};

export default ArticlePage;
