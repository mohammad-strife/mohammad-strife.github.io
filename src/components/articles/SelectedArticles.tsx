import article from "../../assets/images/footer-image.png";

const SelectedArticles = () => {
  return (
    <section>
      <div className="w-5/6 mx-auto text-right">
        <p className="text-3xl mb-16">مقالات منتخب</p>
        <div className="grid grid-cols-12 gap-5 text-white">
          <div className="col-span-6">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-24 right-5 text-3xl w-1/2 ml-auto">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-6">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-24 right-5 text-3xl w-1/2 ml-auto">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-4">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-16 right-5 text-xl  w-1/2 ml-auto">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-4">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-16 right-5 text-xl  w-1/2 ml-auto">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-4">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-16 right-5 text-xl  w-1/2 ml-auto">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedArticles;
