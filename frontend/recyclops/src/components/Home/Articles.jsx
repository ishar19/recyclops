import React, { useState, useEffect, useContext } from "react";
import { getArticles } from "../../APIs/Article";
import PropTypes from "prop-types";
import ArticleBox from "./ArticleBox";
import { UserContext } from "../../Context/UserProvider";

const Articles = () => {
  //   const [selected, setSelected] = useState(0);
  //   const handleSelect = (e, key) => {
  //     setSelected(key);
  //   };
  const [articles, setArticles] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchArticles = async () => {
      getArticles().then((data) => {
        setArticles([...data]);
      });
    };
    // fetchArticles();
  }, []);
  return (
    <div className="mt-10">
      <div className="flex gap-5 overflow-x-scroll py-4  lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
        {/* <ArticleTitles
          articleTitles={articleTitles}
          selected={selected}
          handleSelect={handleSelect}
        /> */}
      </div>
      <div className="grid gap-4 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
        {articles.map((article, i) => (
          <ArticleBox
            user={user}
            article={article.data}
            id={article.id}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};



// const ArticleTitles = ({ articleTitles, handleSelect, selected }) => {
//   return articleTitles.map((title, i) =>
//     selected == i ? (
//       <h2
//         key={i}
//         className="flex-shrink-0 cursor-pointer pr-2 text-xl text-[#34A853] hover:underline"
//         onClick={(e) => handleSelect(e, i)}
//       >
//         {title}
//       </h2>
//     ) : (
//       <h2
//         key={i}
//         className="flex-shrink-0 cursor-pointer pr-2 text-xl hover:text-[#34A853] hover:underline"
//         onClick={(e) => handleSelect(e, i)}
//       >
//         {title}
//       </h2>
//     )
//   );
// };
Articles.propTypes = {
  articleTitles: PropTypes.array,
  articles: PropTypes.array,
};
export default Articles;
