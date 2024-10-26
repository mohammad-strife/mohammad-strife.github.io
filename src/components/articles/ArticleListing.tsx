import { IoCalendarOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import articles from "../../assets/images/footer-image.png";

const ArticleListing = ({ article }: any) => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-5 border-b border-gray-400 pb-14 mt-20">
      <div className="col-span-5 md:col-span-3 relative">
        <small className="absolute left-2 top-2 rounded-md bg-btnOrange p-1">
          {article.type}
        </small>
        <img src={articles} alt="" className="rounded-md h-full" />
      </div>
      <div className="col-span-7">
        <p className="mb-9 text-2xl">{article.title}</p>

        <p className="inline-block mb-5">{article.description}</p>
        <p className="my-2 flex items-center gap-2 text-gray-400">
          <IoCalendarOutline />
          <small>{article.date}</small>
        </p>
        <p className="my-2 flex items-center gap-1 text-gray-400">
          <FiClock />
          <small> {article.time}</small>
        </p>
      </div>
    </div>
  );
};

export default ArticleListing;
