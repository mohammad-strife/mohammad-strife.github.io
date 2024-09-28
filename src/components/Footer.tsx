import footerImg from "../assets/images/nature-background-with-tropical-plants_84e.jpeg";
import linkDin from "../assets/images/LinkedIn_icon_circle.svg.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <section className="bg-footer py-10">
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2 my-7 h-96">
          <img
            src={footerImg}
            alt=""
            className="w-screen rounded-lg border border-white h-full"
          />
        </div>

        <div className="col-span-6 col-start-2 flex justify-start gap-20">
          <div className="">
            <ul className="text-white text-center" id="footerUl">
              <li className="text-bgNav text-xl">خدمات سریع</li>
              <li>بازگشت به صفحه اصلی</li>
              <li>دانلود نسخه اپلیکیشن</li>
              <li>مقالات گردشگری</li>
              <li>تجربه های سفر</li>
              <li>برنامه ریزی سفر</li>
              <li>ایران شناسی</li>
            </ul>
          </div>
          <div className="">
            <ul className="text-white text-center" id="footerUl">
              <li className="text-bgNav text-xl">ارتباط با ما</li>
              <li>تماس با پشتیبانی</li>
              <li>موقعیت مکانی ها</li>
              <li>حریم خصوصی</li>
              <li>ارسال تیکت</li>
              <li>درباره ما</li>
              <li>کوکی ها</li>
            </ul>
          </div>
          <div className="">
            <ul className="text-white text-center" id="footerUl">
              <li className="text-bgNav text-xl">پروفایل کاربری</li>
              <li>ویرایش پروفایل</li>
              <li>اعلان ها</li>
              <li>تیکت های من</li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 col-start-8 text-right text-white">
          <p className="flex justify-end items-center text-xl gap-2">
            کشف کنید تجربه کنید
            <img src={linkDin} alt="" className="h-16" />
          </p>
          <p className="mt-5 pl-12">
            <span className="text-bgNav">سفرکو </span>
            یک پلتفرم بزرگ شناخت جاذبه های گردشگری است هدف ما از این کار شناخت
            تمامی نقاط گردشگری ایران و معرقی آن به تمام مردم ایران و حتی جهان
            ایت. تا به صنعت گردشگری ایران کمک کنیم
          </p>
          <div className="">
            <p className="text-bgNav text-xl mt-20">: شبکه های اجتماعی ما</p>
            <div className="flex justify-end gap-5 mt-4 mr-5">
              <FaInstagram className="size-8" />
              <FaTelegram className="size-8" />
              <FaLinkedin className="size-8" />
            </div>
          </div>
          <p className="mt-20 text-bgNav text-xl">: عضویت در خبرنامه ما</p>
          <span>با عضو شدن در خبرنامه از اخبار گردشگری ما جا نمون</span>
          <div className="mt-8 mb-20 flex justify-end">
            <IoMdSend className="rotate-180 relative left-6 top-3" />
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید"
              className="bg-footer border border-white rounded-lg text-right"
            />
          </div>
        </div>
        <div className="col-span-4 col-start-2 flex gap-4">
          <img src={linkDin} alt="" className="h-16" />
          <img src={linkDin} alt="" className="h-16" />
          <img src={linkDin} alt="" className="h-16" />
          <img src={linkDin} alt="" className="h-16" />
        </div>
        <div className="col-span-2 col-start-10 text-right">
          <small className="text-gray-400">
            تمامی حقوق سفرکو متعلق به سفرکو است و هرگونه کپی برداری مطالب با ذکر
            منبع بلامانع است
          </small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
