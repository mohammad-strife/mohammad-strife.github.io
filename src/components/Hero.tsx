import iran from "../assets/images/mapIran.png";
import { RiSearch2Line } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "./ui/button";
import { MdAddLocation } from "react-icons/md";

const Hero = () => {
  return (
    <section className="mt-20 px-2">
      <div className="bg-bgNav p-5 rounded-md mb-20">
        <div className="grid grid-cols-2">
          <div
            id="filterSide"
            className="col-span-2 md:col-span-1 order-2 md:order-1"
          >
            <p className="text-right text-white mt-10 text-3xl">
              دیدنی های ایران رو کشف کن
            </p>
            <div
              id="searchInput"
              className="relative mt-14 pl-5 hidden md:block"
            >
              <RiSearch2Line className="absolute right-44 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="هرجا رو میخوای جستجو کن"
                className="rounded-md border border-btnOrange text-right w-5/6 md:w-full p-2"
              />
            </div>
            <div className="flex items-center mt-10 text-white">
              <p className="text-right text-2xl">فیلتر کردن مکان</p>
              <FaFilter />
            </div>
            <div id="filter" className="mt-10 w-full md:w-5/6">
              <div className="bg-stone-800 bg-opacity-65 grid grid-cols-3 text-white rounded-md">
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
                <div className="col-span-3 text-left">
                  <Button className="mx-6 my-4 rounded-full bg-btnOrange">
                    اعمال فیلتر
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-right text-white my-10">
              <p className="my-4">
                تو هم اگر مکان خاصی رو میشناسی حتما به ما معرفی کن
              </p>
              <button type="button" className="bg-gray-400 p-2 rounded-md flex items-center text-black gap-1">
                <MdAddLocation />
                افزودن مکان
              </button>
            </div>
          </div>
          <p className="text-right text-white text-xl col-span-2">
            دیدنی های ایران رو کشف کن
          </p>
          <div
            id="searchInput"
            className="col-span-2 relative pl-5 block md:hidden mt-5 mb-10"
          >
            <RiSearch2Line className="absolute right-44 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="هرجا رو میخوای جستجو کن"
              className="rounded-md border border-btnOrange text-right w-5/6 p-2"
            />
          </div>
          <div
            id="mapSide"
            className="col-span-2 md:col-span-1 flex items-center justify-center order-1 md:order-2"
          >
            <img src={iran} alt="" className="p-5 md:p-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
