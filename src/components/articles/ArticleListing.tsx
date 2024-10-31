import { IoCalendarOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import articles from "../../assets/images/footer-image.png";

const ArticleListing = ({ article }: any) => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-3 border-b border-gray-400 pb-14 mt-20 mx-2">
      <div className="col-span-6 md:col-span-3 overflow-hidden relative rounded-lg">
        <small className="absolute left-2 top-2 rounded-md bg-btnOrange p-1"></small>
        <img
          src={articles}
          alt=""
          className="h-full hover:scale-110 transition ease-in-out duration-500"
        />
      </div>
      <div className="col-span-6 md:col-span-9">
        <p
          className="mb-9 text-2xl"
          dangerouslySetInnerHTML={{ __html: article.title }}
        ></p>

        <p
          className="mb-5 line-clamp-1 md:line-clamp-3"
          dangerouslySetInnerHTML={{ __html: article.body }}
        ></p>
        <p className="my-2 flex items-center gap-2 text-gray-400">
          <IoCalendarOutline />
          <small>1403/10/10</small>
        </p>
        <p className="my-2 flex items-center gap-1 text-gray-400">
          <FiClock />
          <small> 22:34</small>
        </p>
      </div>
    </div>
  );
};

export default ArticleListing;
