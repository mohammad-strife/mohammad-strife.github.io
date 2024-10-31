import { Link } from "react-router-dom";
import articleImg from "../../assets/images/footer-image.png";
import { CoustomCarousel } from "../CoustomCarousel";
import axios from "@/api/axios";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SelectedArticles = () => {
  const [selectedArticle, setSelectedArticle]: any = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios.get("/home");
      setSelectedArticle(result.data.data.most_viewed_products);
    };
    fetchArticles();
  }, []);

  const firstRow = selectedArticle.slice(0, 2);
  const secondRow = selectedArticle.slice(2);

  return (
    <section className="my-20">
      <p className="text-3xl mb-10">مقالات منتخب این ماه</p>

      <div className="hidden md:flex p-4">
        {firstRow.map((item: any) => (
          <div className="p-2 relative text-white" key={item.id}>
            <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
              {item.type}
            </span>
            <img src={articleImg} alt="" className="rounded-md" />
            <span className="absolute bottom-8 right-6 text-xl">
              {item.title}
            </span>
            <Link
              to={`/article/${item.id}`}
              className="absolute left-6 bottom-6 underline"
            >
              ادامه مطلب
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12">
        <Carousel className="block md:hidden col-span-10" dir="ltr">
          <CarouselContent>
            {firstRow.map((item: any) => (
              <CarouselItem key={item.id}>
                <div className="">
                  <img src={articleImg} alt="" />
                  {item.title}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="grid grid-cols-12">
        {secondRow.map((item: any) => (
          <div
            className="col-span-12 md:col-span-4 px-4 md:pqeqecczzzfafaj py-2 relative text-white"
            key={item.id}
          >
            <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
              {item.type}
            </span>
            <img src={articleImg} alt="" className="rounded-md" />
            <span className="absolute bottom-8 right-6 text-xl">
              {item.title}
            </span>
            <Link
              to={`/article/${item.id}`}
              className="absolute left-6 bottom-6 underline"
            >
              ادامه مطلب
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedArticles;
