import footerImg from "../assets/images/footer-image.png";
import mainLogo from "../assets/images/main-logo.png";
import eNamad from "../assets/images/eNamad.png";
import mohit from "../assets/images/mohit.png";
import vezarat from "../assets/images/vezarat.png";
import samandehi from "../assets/images/samandehi.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <section className="bg-footer p-10">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="col-span-12 my-7 relative text-white">
          <img
            src={footerImg}
            alt=""
            className="w-screen rounded-lg border border-white h-full opacity-50"
          />
          <p className="absolute top-1/2 right-1/4 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl ">
            همه جای ایران سرای من است...
          </p>
        </div>
        <div className="col-span-6 md:col-span-4 text-white order-1">
          <p className="flex items-center md:text-xl gap-2">
            <img src={mainLogo} alt="" className="h-10 md:h-16" />
            کشف کنید تجربه کنید
          </p>
          <p className="mt-5 hidden md:block">
            <span className="text-bgNav">سفرکو </span>
            یک پلتفرم بزرگ شناخت جاذبه های گردشگری است هدف ما از این کار شناخت
            تمامی نقاط گردشگری ایران و معرقی آن به تمام مردم ایران و حتی جهان
            ایت. تا به صنعت گردشگری ایران کمک کنیم
          </p>
          <div className="hidden md:block">
            <p className="text-bgNav text-xl mt-20">شبکه های اجتماعی ما :</p>
            <div className="flex gap-5 mt-4">
              <FaInstagram className="size-8" />
              <FaTelegram className="size-8" />
              <FaLinkedin className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <p className="mt-16 text-bgNav text-xl">عضویت در خبرنامه ما :</p>
            <p className="w-3/5">
              با عضو شدن در خبرنامه از اخبار گردشگری ما جا نمون
            </p>
            <div className="mt-8 mb-20 ">
              <div className="relative">
                <IoMdSend className="absolute rotate-180 left-1/4 ml-4 top-3" />
              </div>
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="bg-footer border border-white rounded-lg p-2 w-3/4"
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 text-left md:hidden order-2">
          <p className="text-bgNav md:text-xl">شبکه های اجتماعی ما :</p>
          <div className="flex justify-end gap-5 mt-4 text-white">
            <FaInstagram className="size-8" />
            <FaTelegram className="size-8" />
            <FaLinkedin className="size-8" />
          </div>
        </div>
        <div className="col-span-12 block md:hidden text-white order-4">
          <p className="mt-20 text-bgNav text-xl">عضویت در خبرنامه ما :</p>
          <span>با عضو شدن در خبرنامه از اخبار گردشگری ما جا نمون</span>
          <div className="mt-8 mb-20">
            <div className="relative">
              <IoMdSend className="absolute rotate-180 left-2/4 ml-4 top-3" />
            </div>
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید"
              className="bg-footer border border-white rounded-lg p-2 w-1/2"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 flex justify-between md:justify-end mt-5 gap-20 order-3 md:order-2">
          <ul className="text-white text-center" id="footerUl">
            <p className="text-bgNav md:text-xl">پروفایل کاربری</p>
            <li>ویرایش پروفایل</li>
            <li>اعلان ها</li>
            <li>تیکت های من</li>
          </ul>

          <ul className="text-white text-center" id="footerUl">
            <p className="text-bgNav md:text-xl">ارتباط با ما</p>
            <li>تماس با پشتیبانی</li>
            <li>موقعیت مکانی ها</li>
            <li>حریم خصوصی</li>
            <li>ارسال تیکت</li>
            <li>درباره ما</li>
            <li>کوکی ها</li>
          </ul>

          <ul className="text-white text-center" id="footerUl">
            <p className="text-bgNav md:text-xl">خدمات سریع</p>
            <li>بازگشت به صفحه اصلی</li>
            <li>دانلود نسخه اپلیکیشن</li>
            <li>مقالات گردشگری</li>
            <li>تجربه های سفر</li>
            <li>برنامه ریزی سفر</li>
            <li>ایران شناسی</li>
          </ul>
        </div>
        <div className="col-span-12 flex justify-between order-5">
          <div className="w-1/2 md:w-1/5">
            <small className="text-gray-400">
              تمامی حقوق سفرکو متعلق به سفرکو است و هرگونه کپی برداری مطالب با
              ذکر منبع بلامانع است
            </small>
          </div>
          <div className="flex gap-3">
            <img src={samandehi} alt="" className="h-12 md:h-16" />
            <img src={vezarat} alt="" className="h-12 md:h-16" />
            <img src={mohit} alt="" className="h-12 md:h-16" />
            <img src={eNamad} alt="" className="h-12 md:h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
