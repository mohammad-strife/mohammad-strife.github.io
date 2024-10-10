import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import articles from "../assets/images/footer-image.png";

const ArticlesPage = () => {
  return (
    <section className="container mx-auto">
      {/* <section className="grid grid-cols-12 mx-auto text-white">
        <div className="col-span-6">
          <p className="">صفحه اصلی مقالات گردشگری</p>
          <input
            type="text"
            placeholder="...جستجو در مقالات"
            className="border border-btnOrange rounded-md text-right w-5/6b bg-white"
          />
        </div>
        <div className="bg-bgFilter rounded-md col-span-6">
          <p className="text-2xl m-4">فیلتر کردن مقالات</p>
          <p className="pl-80 m-4">
            می توانی چند تا گزینه رو با هم انتخاب کنی و فیلتر رو اعمال کنی
          </p>
          <div className="grid grid-cols-5 gap-3" dir="rtl">
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">فرهنگی</Label>
            </div>
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">مشاهیر</Label>
            </div>
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">تفریحی</Label>
            </div>
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">تاریخی</Label>
            </div>
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">گردشگری</Label>
            </div>
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">غذا ها و خوراکی ها</Label>
            </div>
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">اخبار گردشگری</Label>
            </div>
            <div className="col-span-1">
              <Switch id="airplane-mode" dir="ltr"/>
              <Label htmlFor="airplane-mode">مذهبی</Label>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="text-3xl text-right my-10">مقالات منتخب این ماه</p>
        <div className="flex">
          <div className="">
            <img src={articles} alt="" className="rounded-3xl" />
          </div>
          <div className="">
            <img src={articles} alt="" className="rounded-3xl" />
          </div>
        </div>
      </section>
      <section></section> */}
    </section>
  );
};

export default ArticlesPage;
