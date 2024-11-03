import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import axios from "@/api/axios";
import ArticleSkeleton from "./ArticleSkeleton";
import { CustomPagination } from "@/components/articles/PaginationCustom";
const ArticleListings = () => {
  const [articles, setArticles]: any = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await axios.get("/home");
        console.log(result);
        setArticles(result.data.data.newest_products);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section className="mx-auto my-20">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p className="text-right mb-10">مقالات جدید این ماه</p>
          {articles && Array.isArray(articles) && articles.length > 0 ? (
            <CustomPagination articles={articles} />
          ) : (
            <div className="space-y-8">
              <ArticleSkeleton />
              <ArticleSkeleton />
              <ArticleSkeleton />
              <ArticleSkeleton />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ArticleListings;
