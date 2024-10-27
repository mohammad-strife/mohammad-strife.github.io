import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import axios from "@/api/axios";
import ArticleListing from "./ArticleListing";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ArticleListings = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result: any = await axios.get("/home", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        setArticles(result);
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
          {/* {articles.map((article: any) => (
              <ArticleListing key={article.id} article={article} />
              ))} */}
          <Link to="" className="">
            <ArticleListing />
          </Link>
          <ArticleListing />
          <ArticleListing />
          <ArticleListing />
        </>
      )}
    </section>
  );
};

export default ArticleListings;
