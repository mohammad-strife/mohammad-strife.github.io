import { Link } from "react-router-dom";
import articles from "../../assets/images/footer-image.png";

const SelectedArticles = () => {
  return (
    <section className="my-20">
      <p className="text-3xl mb-10">مقالات منتخب این ماه</p>
      <div className="grid grid-cols-12 text-white">
        <div className="col-span-5 col-start-2 p-3 relative">
          <span className="absolute left-6 top-6 bg-btnOrange p-2 rounded-md">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-10 right-6 text-xl">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">ادامه مطلب</Link>
        </div>
        <div className="col-span-5 p-3 relative">
          <span className="absolute left-6 top-6 bg-btnOrange p-2 rounded-md">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-10 right-6 text-xl">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">ادامه مطلب</Link>
        </div>

        <div className="col-span-4 p-4 relative">
          <span className="absolute left-6 top-6 bg-btnOrange p-2 rounded-md text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-10 right-6">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">ادامه مطلب</Link>
        </div>

        <div className="col-span-4 p-4 relative">
          <span className="absolute left-6 top-6 bg-btnOrange p-2 rounded-md text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-10 right-6">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">ادامه مطلب</Link>
        </div>

        <div className="col-span-4 p-4 relative">
          <span className="absolute left-6 top-6 bg-btnOrange p-2 rounded-md text-sm">
            گردشگری
          </span>
          <img src={articles} alt="" className="rounded-md" />
          <span className="absolute bottom-10 right-6">
            شب در یزد کجا برویم
          </span>
          <Link to="" className="absolute left-6 bottom-6 underline">ادامه مطلب</Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedArticles;
