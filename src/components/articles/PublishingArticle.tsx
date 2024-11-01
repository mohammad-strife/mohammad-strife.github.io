const PublishingArticle = () => {
  return (
    <div className="bg-MyArticles flex justify-between rounded-md p-5 text-white my-10 px-10">
      <div className="flex flex-col text-center gap-5">
        <span className="text-2xl">تجربه بازدید از کلیسای وانک اصفهان</span>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>دسته بندی مقاله</span>
        <small className="text-ticketState">جاذبه های تاریخی</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>تاریخ انتشار</span>
        <small className="text-ticketState">۱۴۰۲/۰۲/۰۲</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>ساعت انتشار</span>
        <small className="text-ticketState">در صف انتشار</small>
      </div>
    </div>
  );
};

export default PublishingArticle;
