import iran from "../assets/images/mapIran.png";
import { RiSearch2Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mt-20 mx-auto">
      <div className="bg-bgNav w-5/6 mx-auto px-8 rounded-md mb-20">
        <div className="grid grid-cols-2">
          <div id="filterSide">
            <p className="text-right text-white mt-10 text-3xl">
              دیدنی های ایران رو کشف کن
            </p>
            <div id="searchInput" className="relative mt-14">
              <RiSearch2Line className="absolute right-44 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="هرجا رو میخوای جستجو کن"
                className="rounded-md border border-btnOrange text-right w-96"
              />
            </div>
            <div className="flex items-center mt-10 text-white">
              <p className="text-right text-2xl">فیلتر کردن مکان</p>
              <FaFilter />
            </div>
            <div id="filter" className="flex mt-10">
              <div className="bg-stone-800 bg-opacity-65 w-2/3 grid grid-cols-3 text-white rounded-md">
                <p className="col-span-3 text-right m-2">نوع جاذبه</p>
                <div className="flex items-center m-3 gap-2">
                  <Label htmlFor="airplane-mode">مذهبی</Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="flex items-center m-3 gap-2">
                  <Label htmlFor="airplane-mode">گردشگری</Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="flex items-center m-3 gap-2">
                  <Label htmlFor="airplane-mode">فرهنگی</Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="flex items-center m-3 gap-2">
                  <Label htmlFor="airplane-mode">تاریخی</Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="flex items-center m-3 gap-2">
                  <Label htmlFor="airplane-mode">طبیعی</Label>
                  <Switch id="airplane-mode" />
                </div>
                <div className="col-span-3">
                  <Button className="mx-6 my-4 rounded-full">
                    اعمال فیلتر
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-right text-white my-10">
              <p className="my-4">
                تو هم اگر مکان خاصی رو میشناسی حتما به ما معرفی کن
              </p>
              <button type="button" className="bg-gray-500 p-2 rounded-md">
                افزودن مکان
              </button>
            </div>
          </div>
          <div id="mapSide" className="flex items-center justify-center">
            <img src={iran} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
