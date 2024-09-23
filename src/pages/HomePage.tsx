import Hero from "@/components/Hero";
import SelectedArticles from "@/components/SelectedArticles";
import { FaEarthEurope } from "react-icons/fa6";

const HomePage = () => {
  return (
    <section className="container mx-auto">
      <div className="w-4/6 mx-auto flex items-center gap-2 pl-7">
        <FaEarthEurope />
        فارسی
      </div>
      <Hero />
      <SelectedArticles />
    </section>
  );
};

export default HomePage;
