import { IoCalendarOutline } from "react-icons/io5";
import article from "../../assets/images/footer-image.png";
import { FiClock } from "react-icons/fi";

const NewArticles = () => {
  return (
    <section className="mx-auto">
      <p className="text-right mb-10">مقالات جدید این ماه</p>

      <div className="grid grid-cols-12 gap-5 border-b-2 border-gray-300 mb-12 pb-20">
        <div className="col-span-5 col-start-4 text-right mt-8">
          <p className="mb-10">برای سفر به شیراز کجا ها بریم؟</p>

          <small className="mb-14">
            شیراز مهد ادب و فرهنگ فارسی با هوایی آکنده از بوی عطر بهار نارنج در
            فصل بهار هر مسافری را برای سفر به این شهر وسوسه می کند
          </small>
          <small className="flex justify-end items-center text-gray-500 mb-2 mt-14">
            <IoCalendarOutline />
            شنبه 8 اردیبهشت 1403
          </small>
          <small className="flex justify-end items-center text-gray-500">
            20:01
            <FiClock />
          </small>
        </div>
        <div className="col-span-4">
          <small className="bg-btnOrange rounded-md relative p-1 top-9 left-3">
            گردشگری
          </small>
          <img src={article} alt="" className="rounded-md h-full" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 border-b-2 border-gray-300 mb-12 pb-20">
        <div className="col-span-5 col-start-4 text-right mt-8">
          <p className="mb-10">برای سفر به شیراز کجا ها بریم؟</p>

          <small className="mb-14">
            شیراز مهد ادب و فرهنگ فارسی با هوایی آکنده از بوی عطر بهار نارنج در
            فصل بهار هر مسافری را برای سفر به این شهر وسوسه می کند
          </small>
          <small className="flex justify-end items-center text-gray-500 mb-2 mt-14">
            <IoCalendarOutline />
            شنبه 8 اردیبهشت 1403
          </small>
          <small className="flex justify-end items-center text-gray-500">
            20:01
            <FiClock />
          </small>
        </div>
        <div className="col-span-4">
          <small className="bg-btnOrange rounded-md relative p-1 top-9 left-3">
            گردشگری
          </small>
          <img src={article} alt="" className="rounded-md h-full" />
        </div>
      </div>
    </section>
  );
};

export default NewArticles;
