import article from "../assets/images/nature-background-with-tropical-plants_84e.jpeg";

const SelectedArticles = () => {
  return (
    <section>
      <div className="w-5/6 mx-auto">
        <p className="text-right text-3xl mb-16">مقالات منتخب</p>
        <div className="grid grid-cols-6 gap-5 text-right text-white">
          <div className="col-span-3">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md h-full" />
            <p className="relative bottom-24 left-72 text-3xl w-1/2">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-3">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md h-full" />
            <p className="relative bottom-24 left-72 text-3xl w-1/2">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-2">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-16 left-48 text-xl w-1/2">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-2">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-16 left-48 text-xl w-1/2">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
          <div className="col-span-2">
            <p className="relative bg-btnOrange rounded-md w-20 text-center top-12 left-5 py-1 text-black">
              گردشگری
            </p>
            <img src={article} alt="" className="rounded-md" />
            <p className="relative bottom-16 left-48 text-xl w-1/2">
              خوش مزه ترین غذا های شمال ایران
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedArticles;
