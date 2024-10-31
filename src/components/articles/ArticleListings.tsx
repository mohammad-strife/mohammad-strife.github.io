import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import axios from "@/api/axios";
import ArticleListing from "./ArticleListing";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArticleSkeleton from "../ArticleSkeleton";
const ArticleListings = () => {
  const [articles, setArticles]: any = useState();
  const [loading, setLoading] = useState(true);

  // const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result: any = await axios.get("/home");
        console.log(result.data.data.newest_products);
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
            articles.map((article: any) => (
              <Link to={`/article/${article.id}`} key={article.id}>
                <ArticleListing article={article} />
              </Link>
            ))
          ) : (
            <div className="space-y-8">
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
