import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import articleImg from "@/assets/images/footer-image.png";
import { Link } from "react-router-dom";

export interface Article {
  id: number;
  type: string;
  title: string;
  coverImage?: string;
}

interface SelectedArticlesProps {
  articles: Article[]; // Use the defined Article type
}

const CoustomCarousel: React.FC<SelectedArticlesProps> = ({ articles }) => {
  return (
    <Carousel className="col-span-12 p-3" dir="ltr">
      <CarouselContent>
        {articles.map((article) => (
          <CarouselItem key={article.id}>
            <div
              className="col-span-12 md:col-span-4  md:p-2 py-2 relative text-white"
              key={article.id}
            >
              <span className="absolute left-6 top-4 bg-btnOrange p-1 rounded-md text-black text-sm">
                {article.type}
              </span>
              <img src={articleImg} alt="" className="rounded-md" />
              <span className="absolute bottom-8 right-6 text-xl">
                {article.title}
              </span>
              <Link
                to={`/article/${article.id}`}
                className="absolute left-6 bottom-6 underline"
              >
                ادامه مطلب
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export { CoustomCarousel };
