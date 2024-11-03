// import React, { useState } from "react";

// type Article = {
//   id: number;
//   title: string;
//   body: string;
// };

// const SearchBar: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [articles, setArticles] = useState<Article[]>([]);

//   const handleSearch = async () => {
//     if (!searchQuery.trim()) return; // Avoid empty searches
//     try {
//       const response = await fetch(
//         `http://localhost:8000/api/v1/search_article?search=${searchQuery}`
//       );
//       const data = await response.json();
//       console.log(data);
//       if (data.result) {
//         setArticles(data.data.searched_article);
//       } else {
//         console.error("Error fetching search results");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder="Search articles..."
//       />
//       <button onClick={handleSearch}>Search</button>

//       <ul>
//         {articles.map((article) => (
//           <li key={article.id}>
//             <h3>{article.title}</h3>
//             <p>{article.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;
