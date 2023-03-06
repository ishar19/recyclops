import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdOutlineBook } from "react-icons/md";
import { UserContext } from "../Context/UserProvider";
import { savedArticles } from "../APIs/Article";
import ArticleBox from "../components/Home/ArticleBox";
const Bookmarks = () => {
  const [articles, setArticles] = useState([]);
  const user = useContext(UserContext);
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchArticles = async () => {
      savedArticles().then((data) => {
        setArticles([...data]);
      });
    };
    fetchArticles();
  }, []);
  return (
    <div>
      <h1 className="flex items-center gap-1 p-5 font-dosis text-4xl font-bold text-greenPrimary">
        <MdOutlineBook />
        Bookmarks
      </h1>
      <div className="grid grid-cols-1 gap-4 px-5  md:grid-cols-2 lg:grid-cols-2">
        {articles.map((article, i) => (
          <ArticleBox
            user={user}
            article={article.data}
            id={article.id}
            key={i}
          />
        ))}
      </div>
      <ProfileBackButton />
      <Navbar />
    </div>
  );
};

export default Bookmarks;
