import { IoCalendarOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import articles from "../../assets/images/footer-image.png";

const NewArticles = () => {
  return (
    <section className="mx-auto my-20">
      <p className="text-right mb-10">مقالات جدید این ماه</p>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 grid grid-cols-12 gap-5 border-b border-gray-400 pb-14 mt-20">
          <div className="col-span-5 md:col-span-3 relative">
            <small className="absolute left-2 top-2 rounded-md bg-btnOrange p-1">گردشگری</small>
            <img src={articles} alt="" className="rounded-md h-full" />
          </div>
          <div className="col-span-7">
            <p className="mb-9 text-2xl">برای سفر به شیراز کجا ها بریم؟</p>

            <p className="inline-block mb-5">
              شیراز مهد ادب و فرهنگ فارسی با هوایی آکنده از بوی عطر بهار نارنج
              در فصل بهار هر مسافری را برای سفر به این شهر وسوسه می کند
            </p>
            <p className="my-2 flex items-center gap-2 text-gray-400">
              <IoCalendarOutline />
              <small>
                شنبه,۱۱ ازدیبهشت ۱۴۰۳
              </small>
            </p>
            <p className="my-2 flex items-center gap-1 text-gray-400">
              <FiClock />
              <small> ۱۱:۳۴</small>
            </p>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-5 border-b border-gray-400 pb-14 mt-20">
          <div className="col-span-5 md:col-span-3 relative">
            <small className="absolute left-2 top-2 rounded-md bg-btnOrange p-1">گردشگری</small>
            <img src={articles} alt="" className="rounded-md h-full" />
          </div>
          <div className="col-span-7">
            <p className="mb-9 text-2xl">برای سفر به شیراز کجا ها بریم؟</p>

            <p className="inline-block mb-5">
              شیراز مهد ادب و فرهنگ فارسی با هوایی آکنده از بوی عطر بهار نارنج
              در فصل بهار هر مسافری را برای سفر به این شهر وسوسه می کند
            </p>
            <p className="my-2 flex items-center gap-2 text-gray-400">
              <IoCalendarOutline />
              <small>
                شنبه,۱۱ ازدیبهشت ۱۴۰۳
              </small>
            </p>
            <p className="my-2 flex items-center gap-1 text-gray-400">
              <FiClock />
              <small> ۱۱:۳۴</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArticles;
