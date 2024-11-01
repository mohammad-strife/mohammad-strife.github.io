import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";
import ArticleListing from "./articles/ArticleListing";
import { Article } from "./CoustomCarousel";
interface CustomPaginationProps {
  articles: Article[];
}

const articlesPerPage = 2;

const CustomPagination = ({ articles }: CustomPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div>
      <div>
        {currentArticles.map((article: any) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <ArticleListing article={article} />
          </Link>
        ))}
      </div>
      <Pagination className="mt-10" dir="ltr">
        <PaginationContent>
          <PaginationItem>
            {currentPage > 1 ? (
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            ) : (
              ""
            )}
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            {currentPage < totalPages ? (
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            ) : (
              ""
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export { CustomPagination };
