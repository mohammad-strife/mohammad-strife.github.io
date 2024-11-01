import ComboBox from "@/components/articles/ComboBox";
export enum CategoryType {
  Article,
  PublishArticle,
  VisitFee,
}
const PublishArticle = () => {
  return (
    <section className="container mx-auto px-20">
      <div className="shadow-3xl p-10 rounded-lg h-screen m-4">
        <p className="border-b border-gray-700 pb-5 text-3xl">
          اطلاعات تکمیلی مقاله
        </p>
        <form className="h-full">
          <div className="grid grid-cols-12 gap-y-20 pt-10">
            <div className="col-span-5 space-y-3">
              <p className="mt-2">دسته بندی مقاله</p>
              <ComboBox type={CategoryType.Article} />
            </div>
            <div className="col-span-5 col-start-7 space-y-3">
              <p className="mt-2">آدرس جاذبه گردشگری</p>
              <input
                type="text"
                className="border-2 rounded-lg h-10 w-full px-2"
                placeholder="آدرس را وارد کنید"
              ></input>
            </div>
            <div className="col-span-5 space-y-3">
              <p className="mt-2">ساعت انتشار مقاله</p>
              <ComboBox type={CategoryType.PublishArticle} />
            </div>
            <div className="col-span-5 col-start-7 space-y-3">
              <p className="mt-2">هزینه بانکی</p>
              <ComboBox type={CategoryType.VisitFee} />
            </div>
          </div>
          <div className="relative h-3/6">
            <button className="bg-inputBorder text-white p-4 rounded-lg absolute bottom-0 left-36">
              انصراف از انتشار مقاله
            </button>
            <button className="bg-sky-600 text-white p-4 rounded-lg absolute bottom-0 left-0">
              منتشر کردن مقاله
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PublishArticle;
