import footerImg from "../assets/images/nature-background-with-tropical-plants_84e.jpeg";

const Footer = () => {
  return (
    <section className="bg-footer">
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2 mt-7 ">
          <img
            src={footerImg}
            alt=""
            className="h-2/3 w-screen rounded-lg border border-white"
          />
        </div>

        <div className="col-span-7 flex justify-center gap-10">
          <div className="">
            <ul>
              <li>خدمات سریع</li>
              <li>بازگشت به صفحه اصلی</li>
              <li>دانلود نسخه اپلیکیشن</li>
              <li>مقالات گردشگری</li>
              <li>تجربه های سفر</li>
              <li>برنامه ریزی سفر</li>
              <li>ایران شناسی</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>خدمات سریع</li>
              <li>بازگشت به صفحه اصلی</li>
              <li>دانلود نسخه اپلیکیشن</li>
              <li>مقالات گردشگری</li>
              <li>تجربه های سفر</li>
              <li>برنامه ریزی سفر</li>
              <li>ایران شناسی</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li>خدمات سریع</li>
              <li>بازگشت به صفحه اصلی</li>
              <li>دانلود نسخه اپلیکیشن</li>
              <li>مقالات گردشگری</li>
              <li>تجربه های سفر</li>
              <li>برنامه ریزی سفر</li>
              <li>ایران شناسی</li>
            </ul>
          </div>
        </div>
        <div className="col-span-5">sddddddddddddd</div>
      </div>
    </section>
  );
};

export default Footer;
