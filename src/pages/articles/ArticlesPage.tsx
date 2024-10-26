
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FiSearch } from "react-icons/fi";
import SelectedArticles from "@/components/articles/SelectedArticles";
import ArticleListings from "@/components/articles/ArticleListings";

const ArticlesPage = () => {
  return (
    <section className="container mx-auto my-20">
      {/* Hero Section */}
      <section className="grid grid-cols-12 mx-auto text-white">
        <div className="col-span-12 md:col-span-5 my-20">
          <p className="text-gray-500">صفحه اصلی {"need"} مقالات گردشگری</p>
          <input
            type="text"
            placeholder="جستجو در مقالات..."
            className="border border-btnOrange rounded-md w-full bg-white p-2 mt-10"
          />
          <div className="relative">
            <FiSearch className="absolute text-gray-500 bottom-3 w-1/2" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 bg-bgFilter rounded-md">
          <p className="text-2xl m-4">فیلتر کردن مقالات</p>
          <p className="m-4">
            می توانی چند تا گزینه رو با هم انتخاب کنی و فیلتر رو اعمال کنی
          </p>
          <div
            className="grid grid-cols-10 px-3 gap-8 mt-14 mb-4 mx-2"
            dir="rtl"
          >
            <div className="col-span-2 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">گردشگری</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-2 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">تاریخی</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-2 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">تفریحی</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-2 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">مشاهیر</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-2 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">فرهنگی</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-3 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">غذا ها و خوراکی ها</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-3 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">اخبار گردشگری</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-2 flex justify-evenly items-center">
              <Label htmlFor="airplane-mode">مذهبی</Label>
              <Switch id="airplane-mode" />
            </div>
            <div className="col-span-10 flex justify-end">
              <button
                type="submit"
                className=" bg-btnOrange rounded-md p-2 text-black"
              >
                اعمال فیلتر
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* pupolar articles */}
      <SelectedArticles />

      <ArticleListings />
    </section>
  );
};

export default ArticlesPage;
