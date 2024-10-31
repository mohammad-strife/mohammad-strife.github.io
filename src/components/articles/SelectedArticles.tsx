import { Link } from "react-router-dom";
import articles from "../../assets/images/footer-image.png";

const SelectedArticles = () => {
  return (
    <section className="my-20">
      <p className="text-3xl mb-10">مقالات منتخب این ماه</p>
      <div className="hidden md:grid grid-cols-12">
        <div className="md:col-span-5 md:col-start-2 p-2 relative text-white">
          <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-8 right-6 text-xl">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">
            ادامه مطلب
          </Link>
        </div>
        <div className="md:col-span-5 p-2 relative text-white">
          <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-8 right-6 text-xl">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">
            ادامه مطلب
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 px-4 md:pqeqecczzzfafaj py-2 relative text-white">
          <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-8 right-6 text-xl">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">
            ادامه مطلب
          </Link>
        </div>
        <div className="col-span-12 md:col-span-4 px-4 md:pqeqecczzzfafaj py-2 relative text-white">
          <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-8 right-6 text-xl">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">
            ادامه مطلب
          </Link>
        </div>
        <div className="col-span-12 md:col-span-4 px-4 md:pqeqecczzzfafaj py-2 relative text-white">
          <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-8 right-6 text-xl">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">
            ادامه مطلب
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedArticles;
