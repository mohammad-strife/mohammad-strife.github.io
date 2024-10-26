import Hero from "@/components/Hero";
import ArticleListings from "@/components/articles/ArticleListings";
import SelectedArticles from "@/components/articles/SelectedArticles";
// import { FaEarthEurope } from "react-icons/fa6";

const HomePage = () => {
  return (
    <section className="container mx-auto">
      {/* <div className="mx-auto flex items-center gap-2 pl-7">
        <FaEarthEurope />
        فارسی
      </div> */}
      <div className="">
        <Hero />
        <SelectedArticles />
        <ArticleListings />
      </div>
    </section>
  );
};

export default HomePage;
