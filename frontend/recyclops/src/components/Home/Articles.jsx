import React, { useState } from "react";
import PropTypes from "prop-types";

import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
const Articles = ({ articles, articleTitles }) => {
  const [selected, setSelected] = useState(0);
  const handleSelect = (e, key) => {
    setSelected(key);
  };

  return (
    <div className="mt-10">
      <div className="flex gap-5 overflow-x-scroll py-4  lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
        <ArticleTitles
          articleTitles={articleTitles}
          selected={selected}
          handleSelect={handleSelect}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
        {articles.map((article, i) => (
          <ArticleBox article={article} key={i} />
        ))}
      </div>
    </div>
  );
};

const ArticleTitles = ({ articleTitles, handleSelect, selected }) => {
  return articleTitles.map((title, i) =>
    selected == i ? (
      <h2
        key={i}
        className="flex-shrink-0 cursor-pointer pr-2 font-dosis text-xl font-light text-[#34A853] hover:underline"
        onClick={(e) => handleSelect(e, i)}
      >
        {title}
      </h2>
    ) : (
      <h2
        key={i}
        className="flex-shrink-0 cursor-pointer pr-2 font-dosis text-xl font-light hover:text-[#34A853] hover:underline"
        onClick={(e) => handleSelect(e, i)}
      >
        {title}
      </h2>
    )
  );
};

const ArticleBox = ({ article, key }) => {
  const [showBookMark, setShowBookMark] = useState(false);
  const handleOption = () => {
    setShowBookMark((prev) => !prev);
  };

  return (
    <div
      key={key}
      className="relative mb-3 flex justify-evenly gap-5 rounded-lg border-[1.5px] border-solid bg-yellowPrimary bg-opacity-50 p-5 drop-shadow-md"
    >
      <div>
        <h2 className="font-dosis text-2xl font-medium">{article.title}</h2>
        <p className="font-dosis text-xl font-bold text-greenPrimary">
          {article.date}
        </p>
      </div>
      <div className="flex flex-col items-end justify-around">
        <img src={article.img} alt="scan image" className="h-16 w-full" />

        <button className="text-xl text-greenPrimary" onClick={handleOption}>
          {showBookMark ? <BsFillBookmarkFill /> : <BsBookmark />}
        </button>
      </div>
    </div>
  );
};

ArticleBox.propTypes = {
  article: PropTypes.object,
  key: PropTypes.number,
};

Articles.propTypes = {
  articleTitles: PropTypes.array,
  articles: PropTypes.array,
};
export default Articles;
