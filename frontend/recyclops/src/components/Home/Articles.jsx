import React, { useState, useEffect, useContext } from "react";
import { getArticles } from "../../APIs/Article";
import PropTypes from "prop-types";
import ArticleBox from "./ArticleBox";
import { UserContext } from "../../Context/UserProvider";
import { savedArticles } from "../../APIs/Article";
const Articles = () => {
  //   const [selected, setSelected] = useState(0);
  //   const handleSelect = (e, key) => {
  //     setSelected(key);
  //   };
  const [articleIds, setArticleIds] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useContext(UserContext);
  useEffect(() => {
    const getSavedArticles = async () => {
      await savedArticles(user.uid).then((data) => {
        setArticleIds([...data]);
      });
    };
    if (user != null) {
      getSavedArticles();
    }
  }, [user]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchArticles = async () => {
      getArticles().then((data) => {
        setArticles([...data]);
      });
    };

    fetchArticles();
    setLoading(false);
  }, [articleIds]);
  return (
    <div className="mt-10">
      <div className="flex gap-5 overflow-x-scroll py-4  lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default"></div>
      <div className="grid grid-cols-1 gap-4   md:grid-cols-2 lg:grid-cols-2">
        {articles.map((article, i) => {
          return (
            <ArticleBox
              user={user}
              article={article.data}
              id={article.id}
              key={i}
              articleIds={articleIds}
              bookmarked={articleIds.includes(article.id)}
              loading={loading}
            />
          );
        })}
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
