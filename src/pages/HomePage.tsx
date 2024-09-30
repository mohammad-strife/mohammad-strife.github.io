import Hero from "@/components/Hero";
import NewArticles from "@/components/NewArticles";
import SelectedArticles from "@/components/SelectedArticles";
import { FaEarthEurope } from "react-icons/fa6";

const HomePage = () => {
  return (
    <section className="container mx-auto grid grid-cols-12">
      {/* <div className="mx-auto flex items-center gap-2 pl-7">
        <FaEarthEurope />
        فارسی
      </div> */}
      <div className="col-span-10 mx-auto col-start-2">
        <Hero />
        <SelectedArticles />
        <NewArticles />
      </div>
    </section>
  );
};

export default HomePage;
